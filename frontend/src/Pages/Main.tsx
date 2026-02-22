import Button from "../Components/Button";
import Header from "../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faFlask,
    faQuestion,
    faRocket,
    faShield,
    faSliders,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../Components/Card";
import { useState } from "react";
import SpinnerLoading from "../Components/SpinnerLoading";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ResponseData {
    code: number;
    status: string;
    data: {
        prediction_label: string;
        prediction: number;
        text: string;
        probability: {
            advertisement: number;
            normal: number;
            scam: number;
        };
    };
}
const Main = () => {
    const [text, setText] = useState("");
    const [data, setData] = useState<null | ResponseData>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setData(null);
        setIsLoading(true);
        try {
            const requests = await fetch("http://127.0.0.1:5000/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text }),
            });
            const response = await requests.json();

            setData(response);
        } catch (error) {
            console.error(error);
            return alert(
                "Terjadi kesalahan saat mengirim data. Silakan coba lagi.",
            );
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    };

    return (
        <main className="container mx-auto  ">
            <Header />

            <section
                className="h-screen px-20  bg-red-100/50 flex flex-row justify-evenly gap-42  items-center "
                id="home"
            >
                <div>
                    <div className="bg-red-100 w-fit px-4 py-2 rounded-4xl flex flex-row items-center gap-3 mb-2">
                        <p className="text-red-500 text-2xl animate-pulse">•</p>
                        <p className="text-bold text-red-500 ">
                            Machine Learning Powered
                        </p>
                    </div>

                    <h2 className="text-6xl max-w-xl font-extrabold text-red-500">
                        Deteksi Pesan Spam Dengan Machine Learning.
                    </h2>
                    <p className="text-red-500 text mt-5 font-bold ">
                        Sistem Klasifikasi Dengan Menggunakan Model Logistic
                        Regression.
                    </p>
                    <div className="flex gap-5">
                        <a href="#demo">
                            <Button
                                color="red"
                                className="rounded mt-5 p-5 text-white flex flex-row gap-2 items-center hover:bg-red-600 transition-all duration-300"
                            >
                                <FontAwesomeIcon icon={faRocket} />
                                Coba Sekarang
                            </Button>
                        </a>
                        <a href="#about">
                            <Button
                                color="red"
                                className="rounded mt-5 p-5 text-red-500 flex flex-row gap-2 items-center bg-transparent outline-2 outline-red-500 hover:outline-red-700 transition-all duration-300 "
                            >
                                <FontAwesomeIcon icon={faQuestion} />
                                Tentang
                            </Button>
                        </a>
                    </div>

                    <hr className="text-red-500 w-xl absolute mt-5  " />
                </div>

                <div className=" duration-1000 delay-1000 ease-in-out">
                    <div className="absolute bg-red-400 w-52 h-52 opacity-40 blur-2xl right-35 bottom-50 " />
                    <FontAwesomeIcon
                        icon={faShield}
                        className="text-[15rem] text-red-500 animate-flying"
                    />
                </div>
            </section>

            <section
                className="h-full flex flex-col items-center pt-20 gap-10 px-20"
                id="about"
            >
                <div className="bg-red-100 text-red-500 rounded-full p-2 font-bold">
                    <p className="tracking-wide">TENTANG</p>
                </div>

                <div className="  text-center">
                    <p className="text-4xl text-red-500 mb-5 font-bold">
                        Tentang Anti Spam
                    </p>
                    <p className="text-xl">
                        Anti Spam Web adalah web pendeteksi spam. dengan
                        menggunakan model Logistic Regression untuk
                        mengklasifikasikan pesan apakah termasuk spam atau
                        bukan. Web ini dibuat dengan menggunakan React JS untuk
                        frontend dan Python Flask untuk backend. Web ini juga
                        menggunakan Tailwind CSS untuk stylingnya.
                    </p>
                </div>

                <div className="mt-5 flex flex-row gap-10 justify-center text-center">
                    <Card className="p-20 shadow-2xl shadow-red-200 hover:outline-red-400 hover:outline-1 items-center flex flex-col hover:shadow-red-300 rounded-xl">
                        <div className="p-2 w-fit  bg-red-500 rounded-xl text-white shadow-2xl shadow-red text-2xl">
                            <FontAwesomeIcon icon={faSliders} />
                        </div>
                        <p className="text-red-400  text-2xl font-extrabold mt-2">
                            Mudah
                        </p>
                        <h2>Tampilan yang sederhana dan menarik.</h2>
                    </Card>

                    <Card className="p-20 shadow-2xl shadow-red-200 hover:outline-red-400 hover:outline-1 items-center flex flex-col hover:shadow-red-300 rounded-xl">
                        <div className="p-2 w-fit  bg-red-500 rounded-xl text-white shadow-2xl shadow-red text-2xl">
                            <FontAwesomeIcon icon={faRocket} />
                        </div>
                        <p className="text-red-400  text-2xl font-extrabold mt-2">
                            Cepat
                        </p>
                        <h2>Website dengan latency yang rendah.</h2>
                    </Card>
                    <Card className="p-20 shadow-2xl shadow-red-200 hover:outline-red-400 hover:outline-1 items-center flex flex-col hover:shadow-red-300 rounded-xl">
                        <div className="p-2 w-fit  bg-red-500 rounded-xl text-white shadow-2xl shadow-red text-2xl">
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        <p className="text-red-400  text-2xl font-extrabold mt-2">
                            Akurat
                        </p>
                        <h2>Model dengan akurasi yang akurat.</h2>
                    </Card>
                </div>
            </section>

            <section className="mt-10 p-5" id="demo">
                <Card className="max-w-full h-fit     bg-red-100/50  rounded-xl shadow-2xl shadow-red-200 outline-1 outline-red-200 flex flex-col items-center p-5">
                    <h2 className="text-red-500 text-6xl font-black">Demo</h2>
                    <p className="text-red-300 text-2xl font-bold">
                        Coba Analisa Pesan Anda
                    </p>

                    <form
                        className="w-full h-screen flex flex-col "
                        onSubmit={handleSubmit}
                    >
                        <textarea
                            name=""
                            id=""
                            className="bg-white w-full h-full rounded mt-2 outline-red-400 p-2"
                            placeholder="Masukan pesan disini..."
                            minLength={10}
                            onChange={(e) => setText(e.target.value)}
                            required
                        />
                        <Button
                            className="rounded justify-center py-2 hover:bg-red-600 w-full text-white mt-5 flex flex-row items-center gap-4 font-black text-3xl "
                            color="red"
                        >
                            <FontAwesomeIcon icon={faFlask} />
                            Analisa
                        </Button>
                    </form>
                    {isLoading && <SpinnerLoading />}

                    {!isLoading && data && (
                        <div className="w-full mt-5 p-5 bg-white rounded shadow-2xl text-center shadow-red-200">
                            <h2 className="text-2xl font-bold text-red-500 ">
                                Hasil Analisa Pesan Anda
                            </h2>
                            <h2 className="text-8xl font-black text-red-500 m-10">
                                {data.data.prediction_label}
                            </h2>
                            <p className="text-red-500 font-bold text-xl">
                                Probabilitas Pesan Anda
                            </p>

                            <div className="w-2xl  mx-auto m-10  flex flex-row gap-10 justify-center">
                                <div className="flex flex-col gap-2">
                                    <CircularProgressbar
                                        className=""
                                        value={
                                            data.data.probability.normal * 100
                                        }
                                        text={`${(data.data.probability.normal * 100).toFixed(2)}%`}
                                        styles={buildStyles({
                                            pathTransition: "none",
                                            textColor: "#fb2c36",
                                            pathColor: `#fb2c36`,
                                        })}
                                    />
                                    <p className="text-xl">normal</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <CircularProgressbar
                                        className=""
                                        value={
                                            data.data.probability
                                                .advertisement * 100
                                        }
                                        text={`${(data.data.probability.advertisement * 100).toFixed(2)}%`}
                                        styles={buildStyles({
                                            pathTransition: "none",
                                            textColor: "#fb2c36",
                                            pathColor: `#fb2c36`,
                                        })}
                                    />
                                    <p className="text-xl">advertisement</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <CircularProgressbar
                                        className=""
                                        value={data.data.probability.scam * 100}
                                        text={`${(data.data.probability.scam * 100).toFixed(2)}%`}
                                        styles={buildStyles({
                                            pathTransition: "none",
                                            textColor: "#fb2c36",
                                            pathColor: `#fb2c36`,
                                        })}
                                    />
                                    <p className="text-xl">scam</p>
                                </div>
                            </div>
                        </div>
                    )}
                </Card>
            </section>

            <section className="h-20 flex items-center justify-center">
                <p className="text-red-500 font-bold">
                    &copy; 2026 Ipii Web. All rights reserved.
                </p>
            </section>
        </main>
    );
};

export default Main;
