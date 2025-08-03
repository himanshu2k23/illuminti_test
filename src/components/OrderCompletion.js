'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderCompletionSuccess from './OrderCompletionSuccess';
import OrderCompletionProblem from './OrderCompletionProblem';

export default function OrderCompletion() {
    const [view, setView] = useState('success');
    const orderId = '#32845';

    const handleSuccessReturn = () => {
        toast.info('Returning to order list', {
            position: "top-right",
            autoClose: 2000,
        });
    };

    const handleProblemSubmit = (problem) => {
        toast.success(`Problem reported: \n ${problem}`, {
            position: "top-right",
            autoClose: 3000,
        });
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
            <ToastContainer />
            <div className="w-full max-w-md">
                <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full text-center 
                                bg-gradient-to-r from-blue-400 to-blue-500 
                                text-white py-3 px-4 rounded-[20px]  text-lg font-semibold relative flex items-center justify-center transition-all hover:opacity-90 shadow-md shadow-blue-400/30"
                    onClick={() => setView(view === 'success' ? 'problem' : 'success')}
                >
                    <div className="absolute left-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    {view === 'success' ? 'Order Completion' : 'Report a Problem'}
                </motion.button>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={view}
                        initial={{ opacity: 0, x: view === 'success' ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: view === 'success' ? -50 : 50 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-[20px] shadow-md overflow-hidden mt-4"
                    >
                        {view === 'success' ? (
                            <OrderCompletionSuccess
                                orderId={orderId}
                                onReturn={handleSuccessReturn}
                            />
                        ) : (
                            <OrderCompletionProblem
                                orderId={orderId}
                                onSubmit={handleProblemSubmit}
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}