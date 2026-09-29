import React from 'react';
import { motion } from 'framer-motion';

// --- Types ---
interface PathItem {
    id: string;
    label: string;
    icon: React.ReactNode;
}

// --- Data Configuration ---
const LEARNING_PATHS: PathItem[] = [
    { id: 'design', label: 'Design', icon: <img src="/icons/learning-path-icon-1.png" alt="design Icon" /> },
    { id: 'development', label: 'Development', icon: <img src="/icons/learning-path-icon-2.png" alt="development Icon" /> },
    { id: 'it-software', label: 'IT & Software', icon: <img src="/icons/learning-path-icon-3.png" alt="it-software Icon" /> },
    { id: 'business', label: 'Business', icon: <img src="/icons/learning-path-icon-4.png" alt="business Icon" /> },
    { id: 'marketing', label: 'Marketing', icon: <img src="/icons/learning-path-icon-5.png" alt="marketing Icon" /> },
    { id: 'photography', label: 'Photography', icon: <img src="/icons/learning-path-icon-6.png" alt="photography Icon" /> },
];

export default function LearningPathsSection() {
    return (
        <section className="w-full bg-white mt-4 py-20 px-4 md:px-8 flex flex-col items-center justify-center">

            {/* --- HEADER SECTION --- */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-[40px] text-black heading-s mb-4">
                    Explore Diverse Learning Paths at Bytespace
                </h2>
                <p className="text-[#8C93A0] text-base md:text-[17px] max-w-3xl mx-auto body-l font-light">
                    At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
                </p>
            </div>

            {/* --- PATH CARDS GRID --- */}
            <div className="w-full max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                {LEARNING_PATHS.map((path) => (
                    <motion.div
                        key={path.id}
                        whileHover={{ y: -5, boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.05)" }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-3xl p-4 md:p-6 cursor-pointer group hover:border-gray-300 transition-colors duration-200"
                    >
                        {/* Icon Circle */}
                        <div className="w-14 h-14 rounded-full bg-[#CCFF00] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                            {path.icon}
                        </div>

                        {/* Label */}
                        <span className="label-l text-gray-800 text-center">
                            {path.label}
                        </span>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}