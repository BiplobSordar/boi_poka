
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { notify } from '../utils';
import { toast } from 'react-toastify';
import { UserContext } from '../Context/userContext';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    setTimeout(() => {
      setSubmitting(false);
      if (form.email && form.password) {
        // Simulate login success
        setUser(form)
        toast.success('User LoggedIn Successfully...')

        navigate('/');
      } else {

        setError('Invalid email or password');

        toast.error('Logging Failed...')
      }
    }, 1200);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Sign In to BookHub</h1>
      {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-5">
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
            placeholder="Your password"
            min={8}
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition disabled:opacity-50"
        >
          {submitting ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
      <div className="mt-6 flex justify-between items-center text-sm">
        <Link to="/auth/sign-up" className="text-secondary hover:underline">Create an account</Link>
        <Link to="/auth/forgot" className="text-gray-500 hover:underline">Forgot password?</Link>
      </div>
    </div>
  );
};

export default LoginPage;