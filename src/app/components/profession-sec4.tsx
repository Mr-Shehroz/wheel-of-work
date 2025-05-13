'use client';
import Image from 'next/image';
import { useState } from 'react';

const items = [
    {
        title: 'YOUR TALENT',
        borderColors: ['white', 'gray', 'gray', 'gray'],
        content:
            'We meticulously select the best talents in various fields such as Tech, Engineering, Finance and Transition Management. We offer our freelancers missions from the most prestigious companies. Large renowned groups, recognized SMEs or start-ups full of promise.',
    },
    {
        title: 'YOUR CAREER',
        borderColors: ['gray', 'white', 'gray', 'gray'],
        content:
            'We develop a career development strategy with our freelancers so that each assignment fits perfectly into their professional development. We provide tailored advice to help them make the best choices and ensure they feel supported.',
    },
    {
        title: 'YOUR EXPERIENCE',
        borderColors: ['gray', 'gray', 'white', 'gray'],
        content:
            'We work closely with our freelancers and strive to provide them with the best possible experience. Thanks to our platform, they can focus on the job, not the administrative work. No more prospecting: our freelancers receive the best job offers directly while benefiting from our support.',
    },
    {
        title: 'YOUR ENVIRONMENT',
        borderColors: ['gray', 'gray', 'gray', 'white'],
        content:
            'We have set up an ecosystem of solutions to support our freelancers in their daily issues to allow them to concentrate on the essential: their mission.',
    },
];

export default function Section4() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const prevSlide = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
            setFade(true);
        }, 200); // Duration for fade-out animation
    };

    const nextSlide = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
            setFade(true);
        }, 200); // Duration for fade-out animation
    };

    return (
        <div className="bg-black text-white pt-40 min-h-screen">
            <section>
                <div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center w-[80%] md:w-[50%] xl:w-[36%] mx-auto">
                        SUPER ATTENTIVE BACK UP
                    </h2>
                </div>

                {/* For Mobile Screens */}
                <div className="flex items-center justify-between px-4 gap-4 mt-20 xl:hidden">
                    <svg
                        onClick={prevSlide}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer hover:text-gray-400 transition"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                    </svg>

                    <h4 className="text-xl font-semibold">
                        {items[currentIndex].title}
                    </h4>

                    <svg
                        onClick={nextSlide}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer hover:text-gray-400 transition"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                </div>

                {/* For XL Screens */}
                <div className="hidden xl:flex justify-center gap-6 mt-10">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`text-lg font-semibold ${currentIndex === index ? 'text-white' : 'text-gray-500'} cursor-pointer`}
                            onClick={() => setCurrentIndex(index)} // Change currentIndex when title is clicked
                        >
                            {item.title}
                        </div>
                    ))}
                </div>

                {/* Title Border Color Logic */}
                <div className="flex gap-1 xl:gap-0 justify-center mt-20 mb-10">
                    {items[currentIndex].borderColors.map((color, index) => (
                        <div
                            key={index}
                            className={`border w-14 md:w-28 lg:w-40 xl:w-52 ${color === 'white' ? 'border-white' : 'border-gray-600'} transition-colors duration-300`}
                        ></div>
                    ))}
                </div>

                {/* Dynamic White Section */}
                <div
                    key={currentIndex} // Forces re-render on slide change
                    className={`bg-white text-black min-h-[80vh] md:min-h-[60vh] lg:min-h-[50vh] flex flex-col items-center justify-center gap-8 px-6 pt-16 pb-20 transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
                >
                    <p className="text-center max-w-3xl text-lg leading-relaxed">
                        {items[currentIndex].content}
                    </p>

                    <div className="flex flex-col sm:flex-row md:gap-1 gap-4">
                        <button className="bg-black text-white px-20 md:px-10 py-3 rounded-full md:rounded-br-none md:rounded-tr-none hover:bg-gray-800 transition">
                            Freelancers
                        </button>
                        <button className="bg-black text-white px-20 md:px-10 py-3 rounded-full md:rounded-bl-none md:rounded-tl-none hover:bg-gray-800 transition">
                            Companies
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative w-full">
                    <Image
                        className="object-cover w-full h-[80vh] md:h-[100vh] lg:h-[120vh]"
                        src="/back.jpg"
                        alt="back"
                        layout="intrinsic"
                        width={1200} // Set a higher width to maintain aspect ratio
                        height={800} // Set a corresponding height to maintain aspect ratio
                    />
                </div>
            </section>
        </div>
    );
}
