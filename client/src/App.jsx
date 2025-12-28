import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup'; // ✅ FIXED: Lowercase 'u' matches your file
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import VolunteerForm from './pages/VolunteerForm';
import Initiatives from './pages/Initiatives';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/initiatives" element={<Initiatives />} />
        
        {/* Volunteer Route */}
        <Route path="/volunteer/:id" element={<VolunteerForm />} />

        {/* 404 Route */}
        <Route path="*" element={<h1 className="text-center mt-20 text-3xl">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
    
  );
}

export default App;