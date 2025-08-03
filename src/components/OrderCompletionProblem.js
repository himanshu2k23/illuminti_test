'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const OrderCompletionProblem = ({ orderId, onSubmit }) => {
    const [selectedProblem, setSelectedProblem] = useState(null);

    const problemTypes = [
        'Client Unavailable',
        'Damaged in Transit',
        'Access Problem',
        'Other Problem'
    ];

    const handleProblemSelect = (problem) => {
        setSelectedProblem(problem);
    };

    const handleSubmit = () => {
        if (!selectedProblem) {
            onSubmit(null);
            return;
        }

        onSubmit(selectedProblem);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 text-center relative"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-5"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Order {orderId}</h2>
            <p className="text-slate-500 font-medium mb-6 text-sm">Select the problem type.</p>

            <div className="space-y-4 mb-6">
                {problemTypes.map((problem, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleProblemSelect(problem)}
                        className={`w-full 
                            text-gray-700 
                            p-3 
                            rounded-[10px] 
                            text-center 
                            transition-all
                            border 
                            ${selectedProblem === problem
                                ? 'bg-blue-50 border-blue-500 text-blue-700'
                                : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                    >
                        {problem}
                    </motion.button>
                ))}
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="w-full 
                    bg-gradient-to-r from-red-500 to-red-600 
                    text-white 
                    py-3 
                    rounded-[15px] 
                    font-semibold 
                    hover:opacity-90 
                    transition-all
                    shadow-md shadow-red-500/30
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                    cursor-pointer"
                disabled={!selectedProblem}
            >
                SUBMIT AND CONTACT
            </motion.button>
        </motion.div>
    );
};

export default OrderCompletionProblem;