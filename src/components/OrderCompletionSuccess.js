import { motion } from 'framer-motion';

const OrderCompletionSuccess = ({ orderId, onReturn }) => {
    const completedTasks = [
        'Cargo Delivery',
        'Photo Confirmation (8 photos)',
        'Client Signature',
        'Furniture Assembly'
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 text-center"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-5"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Order {orderId} Completed</h2>
            <p className="text-slate-500 font-medium mb-6 text-sm">All tasks were successfully completed.</p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="bg-gray-100 rounded-xl p-4 mb-6 text-left space-y-3 font-bold"
            >
                {completedTasks.map((task, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        className="flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-green-500 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-gray-700">{task}</span>
                    </motion.div>
                ))}
            </motion.div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onReturn}
                className="w-full 
                    bg-gradient-to-r from-blue-400 to-blue-500 
                    text-white py-3 
                    rounded-md 
                    font-semibold 
                    hover:opacity-90 
                    transition-all 
                    shadow-md shadow-blue-400/30
                    cursor-pointer"
            >
                RETURN TO LIST
            </motion.button>
        </motion.div>
    );
};

export default OrderCompletionSuccess;