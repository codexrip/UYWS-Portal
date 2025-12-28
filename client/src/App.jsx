import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your pages (Adjust paths if your folders are different)
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import VolunteerForm from './pages/VolunteerForm'; // You might need to create this!
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
        <Route path='/initiatives' element={<Initiatives/>} />
        
        {/* ✅ FIX: This handles the link from InitiativeCard */}
        <Route path="/volunteer/:id" element={<VolunteerForm />} />
        <Routes path="*" element={<h1 className="text-center mt-20 text-3xl">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;