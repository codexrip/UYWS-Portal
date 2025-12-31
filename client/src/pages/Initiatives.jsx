import { useState, useEffect } from 'react';
import axios from 'axios';
import InitiativeCard from '../components/InitiativeCard';
import { Loader2, AlertCircle } from 'lucide-react';

const API_BASE_URL = "https://localhost:5000"; 

const Initiatives = () => {
  const [initiatives, setInitiatives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInitiatives = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/initiatives`);
        
        if (Array.isArray(response.data)) {
            setInitiatives(response.data);
        } else {
            console.error("Received data is not a list:", response.data);
            setInitiatives([]); 
        }
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load initiatives. Please check your connection.");
        setLoading(false);
      }
    };

    fetchInitiatives();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex justify-center items-center">
      <Loader2 className="h-10 w-10 animate-spin text-teal-600" />
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex flex-col justify-center items-center text-red-500 gap-2">
      <AlertCircle className="h-8 w-8" />
      <p>{error}</p>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiatives.length > 0 ? (
          initiatives.map((initiative) => (
            <InitiativeCard key={initiative._id} initiative={initiative} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-10">
            <p>No initiatives found at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Initiatives;