'use client';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export default function DietResult({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-slate-900/70 p-8 rounded-3xl border border-emerald-500/20 shadow-xl backdrop-blur-md prose prose-invert max-w-none"
    >
      <h2 className="text-3xl font-bold text-emerald-400 mb-4">Your Diet Analysis</h2>
      <ReactMarkdown>{text}</ReactMarkdown>
    </motion.div>
  );
}