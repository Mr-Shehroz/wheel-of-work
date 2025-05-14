export default function Section6() {
    return (
        <section>
            <div className="lg:flex">
                {/* COMPANIES Section */}
                <div className="bg-[url(/office.jpg)] bg-cover bg-center w-full min-h-80 md:min-h-screen lg:min-h-[70vh] relative">
                    {/* Circle */}
                    <svg
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] w-[80%]"
                        fill="none"
                        stroke="white"
                        strokeWidth={4}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="50%" cy="50%" r="50%" />
                    </svg>

                    {/* Centered Text & Button */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            COMPANIES
                        </h2>
                        <button className="bg-white text-black px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium text-sm sm:text-base md:text-lg lg:text-xl hover:bg-gray-200 transition">
                            Contact us
                        </button>
                    </div>
                </div>

                {/* FREELANCERS Section */}
                <div className="bg-[#f4ddc5] w-full min-h-80 md:min-h-screen lg:min-h-[70vh] flex flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                        FREELANCERS
                    </h2>
                    <button className="bg-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium text-sm sm:text-base md:text-lg lg:text-xl hover:bg-gray-800 transition">
                        Log in
                    </button>
                </div>
            </div>
        </section>
    );
}
