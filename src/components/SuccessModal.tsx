"use client";

import { CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SuccessModalProps {
  show: boolean;
  onClose: () => void;
}

export default function SuccessModal({ show, onClose }: SuccessModalProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl p-8 shadow-lg max-w-sm w-full text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CheckCircle className="mx-auto text-green-500 w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-green-600">
              Mensagem enviada!
            </h2>
            <p className="text-gray-600 mb-6">
              Entraremos em contato em breve.
            </p>
            <button
              onClick={onClose}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Fechar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
