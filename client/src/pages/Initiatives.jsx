import { useState, useEffect } from 'react';
import axios from 'axios';
import InitiativeCard from '../components/InitiativeCard';
import { Loader2 } from 'lucide-react';

const Initiatives = () => {
  const [initiatives, setInitiatives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInitiatives = async () => {
      try {
        // This connects to your Backend API
        const response = await axios.get('http://localhost:5000/api/initiatives');
        setInitiatives(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load initiatives. Is the backend server running?");
        setLoading(false);
      }
    };

    fetchInitiatives();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex justify-center items-center">
      <Loader2 className="h-10 w-10 animate-spin text-brand-green" />
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex justify-center items-center text-red-500">
      {error}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Upcoming Initiatives
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Find a cause that speaks to you and join us in making a difference.
        </p>
      </div>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiatives.map((initiative) => (
          <InitiativeCard key={initiative._id} initiative={initiative} />
        ))}
      </div>
    </div>
  );
};

export default Initiatives;