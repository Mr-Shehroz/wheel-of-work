"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const carouselData = [
    {
        img: "/img1.png",
        name: "FLORA PORTE",
        role: "Consulting Project Manager",
        linkedin: "#",
        email: "#",
    },
    {
        img: "/img2.png",
        name: "MARJORIE HENNION",
        role: "Director Of Consulting Mission",
        linkedin: "#",
        email: "#",
    },
    {
        img: "/img3.png",
        name: "Guillaume Gérard",
        role: "Tech Talent Agent",
        linkedin: "#",
        email: "#",
    },
    {
        img: "/img4.png",
        name: "Tanguy Laforge",
        role: "Director Of Consulting Mission",
        linkedin: "#",
        email: "#",
    },
    {
        img: "/img5.png",
        name: "Pierre-Edouard Motillon",
        role: "Tech Talent Agent",
        linkedin: "#",
        email: "#",
    },
    {
        img: "/img6.png",
        name: "Audric Darbon",
        role: "CEO Consulting",
        linkedin: "#",
        email: "#",
    },
    {
        img: "/img7.jpeg",
        name: "Charles Coffigniez",
        role: "Head Of Sales Consulting",
        linkedin: "#",
        email: "#",
    },
    {
        img: "/img8.png",
        name: "Mathilde Wattelle",
        role: "Accounting Consultant",
        linkedin: "#",
        email: "#",
    },
];

export default function Section5() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const handleNext = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % carouselData.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 5000);
        return () => clearInterval(interval);
    }, []);

    const getVisibleItems = () => {
        if (typeof window !== "undefined" && window.innerWidth >= 768) {
            return [
                carouselData[index % carouselData.length],
                carouselData[(index + 1) % carouselData.length],
                carouselData[(index + 2) % carouselData.length],
            ];
        } else {
            return [carouselData[index % carouselData.length]];
        }
    };

    const visibleItems = getVisibleItems();

    return (
        <section className="py-20 px-4 md:px-8 bg-white text-black relative overflow-hidden lg:pl-[150px]">
            {/* Rotated Big Logo on Left (only visible on lg and up) */}
            <div className="hidden lg:block absolute -left-45 top-1/2 -translate-y-1/2 -rotate-90 z-10">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={500}
                    height={500}
                    className="object-contain"
                />
            </div>



            <div className="flex flex-col lg:flex-row items-center">
                <div className="flex flex-col items-center w-full">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold w-[90%] md:w-[50%] mx-auto">
                            CAREER AFTER ALL
                        </h2>
                        <p className="mt-6 max-w-xl mx-auto text-gray-600">
                            Our Talent Agents are dedicated to selecting the best assignments
                            for the freelancers in their charge
                        </p>
                    </div>

                    {/* Desktop Arrows */}
                    <div className="hidden lg:flex gap-8 mt-4">
                        <button
                            onClick={handlePrev}
                            className="p-2 hover:text-blue-600 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="30"
                                viewBox="0 0 14.921 26.883"
                            >
                                <path
                                    d="M2236.089,3670.3,2224,3682.623l12.089,11.728"
                                    transform="translate(-2222.582 -3668.883)"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>

                        <button
                            onClick={handleNext}
                            className="p-2 hover:text-blue-600 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="30"
                                viewBox="0 0 14.921 26.883"
                            >
                                <path
                                    d="M2236.089,3670.3,2224,3682.623l12.089,11.728"
                                    transform="translate(2237.503 3695.765) rotate(180)"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div className="flex flex-col items-center gap-6 w-full mt-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index} // triggers animation on index change
                            initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="grid grid-cols-1 md:grid-cols-3 w-full"
                        >
                            {visibleItems.map((person, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center text-center gap-4 p-6"
                                >
                                    <Image
                                        src={person.img}
                                        width={200}
                                        height={200}
                                        alt={`Portrait of ${person.name}`}
                                        className="rounded-xl w-[200px] h-[200px] object-cover"
                                    />
                                    <h4 className="text-xl font-semibold">{person.name}</h4>
                                    <p className="text-gray-500">{person.role}</p>
                                    <div className="flex gap-4 mt-2">
                                        <a
                                            href={person.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {/* LinkedIn icon */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 23"
                                                className="w-5 h-5 fill-current"
                                            >
                                                <path d="M5,2.5A2.48,2.48,0,1,1,2.5,0,2.49,2.49,0,0,1,5,2.5M5,7H0V23H5Zm8,0H8V23h5V14.6c0-4.67,6-5,6,0V23h5V12.87C24,5,15.08,5.28,13,9.16Z" />
                                            </svg>
                                        </a>
                                        <a
                                            href={person.email}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {/* Email icon */}
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 stroke-current"
                                            >
                                                <path
                                                    d="M7 9l5 3.5L17 9"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>


                    {/* Mobile Arrows */}
                    <div className="lg:hidden flex gap-8 mt-4">
                        <button
                            onClick={handlePrev}
                            className="p-2 hover:text-blue-600 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="30"
                                viewBox="0 0 14.921 26.883"
                            >
                                <path
                                    d="M2236.089,3670.3,2224,3682.623l12.089,11.728"
                                    transform="translate(-2222.582 -3668.883)"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>

                        <button
                            onClick={handleNext}
                            className="p-2 hover:text-blue-600 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="30"
                                viewBox="0 0 14.921 26.883"
                            >
                                <path
                                    d="M2236.089,3670.3,2224,3682.623l12.089,11.728"
                                    transform="translate(2237.503 3695.765) rotate(180)"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
