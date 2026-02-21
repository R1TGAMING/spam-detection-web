from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

@app.route('/predict', methods=['GET', 'POST'])
def main():
   text = request.args.get('text') or request.json.get('text')
   
   if text is None:
        return jsonify({"error": "Request body must be JSON or Query Params"}), 400

   model = joblib.load('./models/spam_message_detection.joblib')
   vectorizer = joblib.load('./models/vectorizer.joblib')

   text_vectorized = vectorizer.transform([text])

   prediction = model.predict(text_vectorized)

   prediction_label = ""

   if prediction[0] == 0:
       prediction_label = "normal"
   elif prediction[0] == 1:
       prediction_label = "scam"
   else:
       prediction_label = "advertisement"
   
   return jsonify({
       "status": "success",
       "code": 200,
       "data": {
             "text": text,
             "prediction": int(prediction[0]),
             "prediction_label": prediction_label,
             "probability": {
                   "normal": float(round(model.predict_proba(text_vectorized)[0][0], 2)),
                   "scam": float(round(model.predict_proba(text_vectorized)[0][1], 2)),
                   "advertisement": float(round(model.predict_proba(text_vectorized)[0][2], 2))
             }
       }
   })


if __name__ == '__main__':
   app.run(debug=True)