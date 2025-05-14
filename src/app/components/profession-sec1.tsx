"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function Section1() {
    return (
        <section className="w-full flex flex-col-reverse lg:items-end lg:flex-row">
            {/* Left: Image with circle and buttons */}
            <div className="relative w-full h-[70vh] lg:h-[85dvh] lg:ml-6">
                <Image
                    className="h-full w-full object-cover"
                    src="/home.jpg"
                    height={100}
                    width={100}
                    alt="home"
                />

                {/* Circle */}
                <motion.svg
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] w-[80%]"
                    fill="none"
                    stroke="white"
                    strokeWidth={4}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        initial={{ opacity: 0, r: '45%', rotateZ: 0 }}
                        animate={{ opacity: 1, rotateZ: 360, r: '40%' }}
                        transition={{ duration: 1.5 }}
                        cx="50%" cy="50%" r="40%" />
                </motion.svg>

                {/* Desktop Buttons */}
                <div className="absolute hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:flex flex-col gap-3 items-center px-4">
                    <button className="bg-white text-black px-4 md:px-6 py-3 md:py-4 rounded-full text-sm md:text-base">
                        I am a freelancer
                    </button>
                    <button className="bg-white text-black px-4 md:px-6 py-3 md:py-4 rounded-full text-sm md:text-base">
                        I am a business
                    </button>
                    <button className="bg-black text-white px-6 md:px-12 py-3 md:py-4 rounded-full text-sm md:text-base">
                        I sponsor
                    </button>
                </div>
            </div>

            {/* Right: Text section */}
            <div className="bg-[#a6c3d1] w-[70%] h-[80dvh] md:h-screen flex flex-col justify-center items-center text-black px-6 md:px-8 md:py-0">
                <div className="text-center z-50 space-y-2">
                    <h2 className="text-4xl md:text-7xl font-bold">SUPER</h2>
                    <h2 className="text-4xl md:text-7xl font-bold">QUALIFIED</h2>
                    <h2 className="text-4xl md:text-7xl font-bold">TALENTS</h2>
                    <pre className="text-sm md:text-base mt-4 italic">Talent agents .</pre>
                </div>
                {/* Mobile Buttons */}
                <div className="lg:hidden flex flex-col gap-3 items-center px-4">
                    <button className="bg-white text-black px-4 md:px-6 py-3 md:py-4 rounded-full text-sm md:text-base">
                        I am a freelancer
                    </button>
                    <button className="bg-white text-black px-4 md:px-6 py-3 md:py-4 rounded-full text-sm md:text-base">
                        I am a business
                    </button>
                    <button className="bg-black text-white px-6 md:px-12 py-3 md:py-4 rounded-full text-sm md:text-base">
                        I sponsor
                    </button>
                </div>
            </div>
        </section>
    );
}
