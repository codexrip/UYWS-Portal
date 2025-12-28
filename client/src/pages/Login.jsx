import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    // --- 1. HARDCODED ADMIN CHECK (Predefined credentials) ---
    // You can change these to whatever you want
    if (email === 'TheUYwsSysTeM@Dm!n' && password === 'jJhdy773^s6!') {

      // Create a fake "user" object that looks like a database user
      const adminUser = {
        _id: 'admin_id',
        name: 'Master Admin',
        email: 'admin@system.com',
        role: 'admin' // CRITICAL: This allows access to Admin Dashboard
      };

      localStorage.setItem('user', JSON.stringify(adminUser));
      navigate('/admin');
      return; // Stop here, don't check database
    }

    // --- 2. NORMAL MEMBER LOGIN (Database Check) ---
    try {
      // 👇 CHANGE THIS LINE: Add "/api/login" at the end
      const res = await axios.post('https://uyws-portal.vercel.app/api/login', {
        email,
        password
      });

      localStorage.setItem('user', JSON.stringify(res.data));

      // Safety check: In case a database user has role='admin'
      if (res.data.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }

    } catch (err) {
      setError('Invalid Email or Password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 font-sans">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-xl border border-gray-100">

        <div className="text-center mb-8">
          <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="h-8 w-8 text-teal-700" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-gray-900">Sign In</h2>
          <p className="text-gray-500 text-sm mt-2">Admin or Volunteer Login</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email / Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text" // Changed from 'email' to 'text' to allow username "admin"
                placeholder="admin OR email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>
          </div>

          {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded text-center">{error}</div>}

          <button type="submit" className="w-full bg-teal-700 text-white py-3 rounded-lg font-bold hover:bg-teal-800 transition">
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          New Volunteer? <Link to="/signup" className="text-teal-700 font-bold hover:underline">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;