import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import VolunteerForm from './pages/VolunteerForm';
import Initiatives from './pages/Initiatives'; // ✅ NEW IMPORT

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* ✅ NEW ROUTE: Displays the list of all initiatives */}
        <Route path="/initiatives" element={<Initiatives />} />
        
        {/* Route for applying to a specific initiative */}
        <Route path="/volunteer/:id" element={<VolunteerForm />} />
      </Routes>
    </Router>
  );
}

export default App;