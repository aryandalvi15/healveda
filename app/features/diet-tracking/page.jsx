'use client';
import { useState } from 'react';
import DietForm from './components/DietForm';
import DietResult from './components/DietResult';

export default function DietTrackingPage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async (formData) => {
    setError('');
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/diet-tracking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Unknown error');
      setResult(data.analysis);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-10">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-emerald-400">AI Diet Tracking</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Enter your meals for the day and get an instant AI-powered analysis of your calorie balance, nutrition quality, and personalized recommendations.
          </p>
        </div>

        <div className="w-full bg-slate-900/50 backdrop-blur-lg border border-emerald-600/20 rounded-3xl shadow-xl p-8">
          <DietForm onAnalyze={handleAnalyze} loading={loading} />
        </div>

        {error && (
          <div className="text-red-500 font-medium bg-red-950/40 px-4 py-2 rounded-xl border border-red-700/40">
            {error}
          </div>
        )}

        {result && <DietResult text={result} />}
      </div>
    </div>
  );
}