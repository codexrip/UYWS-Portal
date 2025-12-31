import { Routes, Route } from 'react-router-dom';

// Import your pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import VolunteerForm from './pages/VolunteerForm';
import Initiatives from './pages/Initiatives';
import About from './pages/About';


// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Navbar stays at the top */}
      <Navbar />

      {/* 2. Routes go in the middle (flex-grow pushes Footer down) */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
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
      </main>

      {/* 3. Footer stays at the bottom */}
      <Footer />
    </div>
  );
}

export default App;