'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import DiseaseForm from './components/DiseaseForm';
import PredictionResult from './components/PredictionResult';

export default function DiseasePredictionPage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePredict = async (formData) => {
    setError('');
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/disease-prediction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Prediction failed.');
      setResult(data.prediction);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-extrabold text-emerald-400 tracking-tight">
            AI Disease Prediction
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Enter your symptoms and health details to receive an AI-powered
            prediction and actionable medical insights — powered by{' '}
            <span className="text-emerald-400">Google Gemini</span>.
          </p>
        </motion.div>

        <div className="w-full bg-slate-900/50 backdrop-blur-lg border border-emerald-600/20 rounded-3xl shadow-xl p-8 transition-all hover:border-emerald-400/40">
          <DiseaseForm onPredict={handlePredict} loading={loading} />
        </div>

        {error && (
          <div className="text-red-500 font-medium bg-red-950/40 px-4 py-2 rounded-xl border border-red-700/40">
            {error}
          </div>
        )}

        {result && <PredictionResult text={result} />}
      </div>
    </div>
  );
}
