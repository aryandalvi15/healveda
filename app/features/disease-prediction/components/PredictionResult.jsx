'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export default function PredictionResult({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-slate-900/70 p-8 rounded-3xl border border-emerald-500/20 shadow-xl backdrop-blur-md"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-emerald-400 tracking-tight">
          Disease Prediction Result
        </h2>
        <span className="text-sm text-gray-500 font-medium">
          Powered by <span className="text-emerald-400">Gemini AI</span>
        </span>
      </div>

      <div className="prose prose-invert prose-emerald max-w-none leading-relaxed">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>

      <div className="mt-6 pt-4 border-t border-emerald-500/20 text-sm text-gray-400 text-center">
        ⚕️ This prediction is for informational purposes only. Always consult a healthcare professional.
      </div>
    </motion.div>
  );
}
