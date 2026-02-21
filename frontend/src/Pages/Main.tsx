import Button from "../Components/Button";
import Header from "../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faQuestion,
    faRocket,
    faShield,
    faSliders,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../Components/Card";

const Main = () => {
    return (
        <main className="container mx-auto  ">
            <Header />

            <section className="h-screen px-20  bg-red-100/50 flex flex-row justify-evenly gap-42  items-center ">
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
                        <Button
                            color="red"
                            className="rounded mt-5 p-5 text-white flex flex-row gap-2 items-center hover:bg-red-600 transition-all duration-300"
                        >
                            <FontAwesomeIcon icon={faRocket} />
                            Coba Sekarang
                        </Button>
                        <Button
                            color="red"
                            className="rounded mt-5 p-5 text-red-500 flex flex-row gap-2 items-center bg-transparent outline-2 outline-red-500 hover:outline-red-700 transition-all duration-300 "
                        >
                            <FontAwesomeIcon icon={faQuestion} />
                            Tentang
                        </Button>
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

            <section className="h-full flex flex-col items-center pt-20 gap-10 px-20">
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

            <section className="mt-5">sada</section>
        </main>
    );
};

export default Main;
