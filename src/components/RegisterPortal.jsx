// RegisterModal.jsx

import ReactDOM from "react-dom";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const modalRoot = document.getElementById("registerPortal");

const RegisterModal = ({ setIsRegisterOpen }) => {
  return ReactDOM.createPortal(
    <AnimatePresence>
      { (
        <>
          {/* Background overlay */}
          <motion.div
            className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-40"
            onClick={() => setIsRegisterOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal box */}
            <motion.div
              className="relative z-50 bg-white rounded-2xl shadow-2xl p-8 w-96 max-w-full mx-4"
              onClick={(e) => e.stopPropagation()}
              initial={{
                opacity: 0,
                scale: 0.5,
                x:500, 
                y: -300, 
                originX: 1,
                originY: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                transition: { type: "spring", stiffness: 100, damping: 12 },
              }}
              exit={{
                opacity: 0,
                scale: 0.5,
                x: 150,
                y: -150,
                transition: { duration: 0.3 },
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsRegisterOpen(false)}
                className="absolute top-3 right-3 text-purple-600 hover:text-purple-700 transition scale-100 hover:scale-110"
              >
                <X />
              </button>

              <h2 className="text-2xl font-semibold text-center mb-6 text-purple-700">
                Create Your Account
              </h2>

              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <textarea
                  placeholder="Address"
                  rows="2"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="bg-purple-600 text-white font-medium rounded-lg py-2 hover:bg-purple-700 transition"
                >
                  Register
                </button>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    modalRoot
  );
};

export default RegisterModal;
