const Header = () => {
    return (
        <header className="flex justify-between p-5 px-10 bg-white shadow-xl shadow-red-100  items-center fixed right-0 left-0 z-50">
            <div className="flex flex-row items-center gap-3">
                <img
                    src="../../public/logo.png"
                    alt=""
                    className="w-10  shadow-red-500"
                />
                <h2 className=" text-2xl font-black cursor-default text-red-400">
                    AntiSpam
                </h2>
            </div>

            <nav className="flex gap-5 items-center cursor-pointer text-gray-500  font-bold">
                <ul></ul>
                <ul className="hover:text-red-500 transition-all duration-400 delay-100 ease-in-out hover:underline underline-offset-1">
                    Home
                </ul>
                <ul className="hover:text-red-500 transition-all duration-400 delay-100 ease-in-out hover:underline underline-offset-1">
                    Tentang
                </ul>
                <ul className="hover:text-red-500 transition-all duration-400 delay-100 ease-in-out hover:underline underline-offset-1">
                    Demo
                </ul>
            </nav>
        </header>
    );
};

export default Header;
