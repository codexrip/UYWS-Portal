import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Initiatives from './pages/Initiatives';
import Volunteer from './pages/Volunteer'; // New Import
import Admin from './pages/Admin';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/volunteer/:id" element={<Volunteer />} /> {/* New Route */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
