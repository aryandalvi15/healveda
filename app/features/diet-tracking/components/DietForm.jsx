'use client';

import { useState } from 'react';

export default function DietForm({ onAnalyze, loading }) {
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: '',
    meals: '',
    activityLevel: '',
    goal: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    onAnalyze(form);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {['name', 'age', 'meals'].map((field) => (
        <div key={field}>
          <label className="block text-gray-300 mb-2 capitalize">{field}</label>
          <input
            type={field === 'age' ? 'number' : 'text'}
            name={field}
            value={form[field]}
            onChange={handleChange}
            className="w-full p-3 bg-slate-800 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-white"
            placeholder={field === 'meals' ? 'e.g. oats, salad, paneer curry, rice, milk' : ''}
          />
        </div>
      ))}

      <div>
        <label className="block text-gray-300 mb-2">Gender</label>
        <select name="gender" value={form.gender} onChange={handleChange} className="w-full p-3 bg-slate-800 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-300 mb-2">Activity Level</label>
        <select name="activityLevel" value={form.activityLevel} onChange={handleChange} className="w-full p-3 bg-slate-800 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
          <option value="">Select</option>
          <option>Sedentary</option>
          <option>Lightly Active</option>
          <option>Moderately Active</option>
          <option>Very Active</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className="block text-gray-300 mb-2">Goal</label>
        <select name="goal" value={form.goal} onChange={handleChange} className="w-full p-3 bg-slate-800 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
          <option value="">Select</option>
          <option>Lose Weight</option>
          <option>Maintain Weight</option>
          <option>Gain Weight</option>
        </select>
      </div>

      <div className="sm:col-span-2 flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 transition-all duration-200 rounded-xl font-semibold text-white shadow-lg hover:shadow-emerald-500/20 disabled:opacity-50"
        >
          {loading ? 'Analyzing…' : 'Analyze My Diet'}
        </button>
      </div>
    </form>
  );
}
