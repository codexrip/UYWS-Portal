import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const InitiativeCard = ({ initiative }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {/* Image Section */}
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={initiative.imageUrl} 
          alt={initiative.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{initiative.title}</h3>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
          {initiative.description}
        </p>

        {/* Details: Date & Location */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-2 text-brand-green" />
            {new Date(initiative.date).toLocaleDateString()}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-2 text-brand-green" />
            {initiative.location}
          </div>
        </div>

        {/* Action Button */}
        <Link 
          to={`/volunteer/${initiative._id}`} 
          className="w-full block text-center bg-brand-dark text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Volunteer Now
        </Link>
      </div>
    </div>
  );
};

export default InitiativeCard;