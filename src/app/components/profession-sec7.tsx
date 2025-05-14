'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    title: 'SUPPORT YOUR FREELANCE',
    subtitle: 'FREELANCE',
    message: '"Wheel of Work makes my freelance easier thanks to its digital tools. Human relations are one of its great strengths."',
  },
  {
    title: 'BOOST PRODUCTIVITY',
    subtitle: 'TOOLS',
    message: '"This platform saved me hours of planning each week. Absolute game-changer!"',
  },
  {
    title: 'CREATIVE SPACE',
    subtitle: 'DESIGN',
    message: '"A dream come true for creative freelancers looking for freedom and structure."',
  },
  {
    title: 'MANAGE CLIENTS',
    subtitle: 'CRM',
    message: '"Managing clients has never been easier. All tools in one place!"',
  },
  {
    title: 'STAY ORGANIZED',
    subtitle: 'WORKFLOW',
    message: '"Helps me stay focused and organized without any extra effort."',
  },
  {
    title: 'PROJECT CONTROL',
    subtitle: 'DASHBOARD',
    message: '"Real-time tracking of all my ongoing freelance projects is a blessing!"',
  },
  {
    title: 'EASY BILLING',
    subtitle: 'INVOICES',
    message: '"Sending invoices is now as easy as clicking a button. Great UX!"',
  },
  {
    title: 'FREEDOM TO WORK',
    subtitle: 'REMOTE',
    message: '"Gives me the freedom to work from anywhere without losing productivity."',
  },
];

const getVisibleSlides = (width: number) => {
  if (width >= 1280) return 4;
  if (width >= 1024) return 2;
  if (width >= 768) return 2;
  return 1;
};

export default function Section7() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);

  useEffect(() => {
    const updateSlides = () => setVisibleSlides(getVisibleSlides(window.innerWidth));
    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + visibleSlides) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [visibleSlides]);

  const handleBack = () => {
    setCurrentIndex((prev) =>
      (prev - visibleSlides + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + visibleSlides) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    return Array.from({ length: visibleSlides }, (_, i) => {
      const index = (currentIndex + i) % testimonials.length;
      return testimonials[index];
    });
  };

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left mb-6 md:mb-0">
          WoW STORIES
        </h2>

        <div className="hidden md:flex gap-6">
          <button onClick={handleBack} className="p-2 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 14.921 26.883">
              <path d="M2236.089,3670.3,2224,3682.623l12.089,11.728" transform="translate(-2222.582 -3668.883)" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
          <button onClick={handleNext} className="p-2 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 14.921 26.883">
              <path d="M2236.089,3670.3,2224,3682.623l12.089,11.728" transform="translate(2237.503 3695.765) rotate(180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-end gap-4 mb-10 md:hidden">
        <div className="flex gap-1 flex-wrap">
          {Array(testimonials.length).fill(0).map((_, i) => (
            <div key={i} className={`w-6 h-1 ${i === currentIndex ? 'bg-white' : 'border-2 border-gray-700'}`}></div>
          ))}
        </div>
        <button onClick={handleBack} className="w-6 h-6">
          <svg className="fill-white w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={index}
              className="text-white rounded-2xl border border-white p-8 h-[300px] flex flex-col justify-between text-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">{testimonial.title}</h4>
              <h6 className="text-sm sm:text-base md:text-lg font-medium mb-4 text-gray-400">{testimonial.subtitle}</h6>
              <p className="text-sm sm:text-base md:text-lg">{testimonial.message}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
