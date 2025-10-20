'use client';

import { useState } from 'react';

export default function DiseaseForm({ onPredict, loading }) {
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: '',
    symptoms: '',
    duration: '',
    existingConditions: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    onPredict(form);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {['name', 'age', 'duration', 'existingConditions'].map((field) => (
        <div key={field}>
          <label className="block text-gray-300 mb-2 capitalize">{field}</label>
          <input
            type={field === 'age' ? 'number' : 'text'}
            name={field}
            value={form[field]}
            onChange={handleChange}
            className="w-full p-3 bg-slate-800 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-white"
          />
        </div>
      ))}

      <div>
        <label className="block text-gray-300 mb-2">Gender</label>
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="w-full p-3 bg-slate-800 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
        >
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className="block text-gray-300 mb-2">Symptoms (comma-separated)</label>
        <textarea
          name="symptoms"
          value={form.symptoms}
          onChange={handleChange}
          placeholder="e.g., fever, headache, sore throat"
          className="w-full p-3 h-32 bg-slate-800 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-white"
        ></textarea>
      </div>

      <div className="sm:col-span-2 flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 transition-all duration-200 rounded-xl font-semibold text-white shadow-lg hover:shadow-emerald-500/20 disabled:opacity-50"
        >
          {loading ? 'Analyzing…' : 'Predict Disease'}
        </button>
      </div>
    </form>
  );
}
