
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { notify } from '../utils';
import { toast } from 'react-toastify';

const SignUpPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      if (form.email && form.password && form.name) {
        // Simulate sign up success
        
 
        toast.success('User Registation  Done')
        navigate('/auth/login');
      } else {

        setError('Please fill all fields','error');
   
          toast.error('Registation Failed')
      }
    }, 1200);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Create Your BookHub Account</h1>
      {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary"
            placeholder="Create a password"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition disabled:opacity-50"
        >
          {submitting ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>
      <div className="mt-6 text-sm text-center">
        Already have an account?{' '}
        <Link to="/auth/login" className="text-secondary hover:underline">Sign In</Link>
      </div>
    </div>
  );
};

export default SignUpPage;