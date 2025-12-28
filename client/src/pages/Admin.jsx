import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Users, LogOut, Printer, CheckCircle, XCircle, Trash2 } from 'lucide-react';

// ✅ FIX: No trailing slash to avoid double slashes later
const API_URL = "https://uyws-portal.vercel.app";

const Admin = () => {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  // 1. Check Admin Auth & Fetch Data
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!user || user.role !== 'admin') {
      navigate('/login');
      return;
    }

    fetchApplications();
  }, [navigate]);

  const fetchApplications = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/admin/applications`);
      setApplications(response.data);
    } catch (err) {
      console.error("Error fetching applications:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await axios.put(`${API_URL}/api/admin/application/${id}`, { status: newStatus });
      fetchApplications();
    } catch (err) {
      alert("Error updating status");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this application permanently?")) {
      try {
        setApplications(applications.filter(app => app._id !== id));
      } catch (err) {
        alert("Error deleting application");
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8 print:hidden">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Users className="h-8 w-8 text-teal-700" />
              Volunteer Applications
            </h1>
          </div>
          
          <div className="flex gap-3">
            <button onClick={handlePrint} className="flex items-center gap-2 bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
              <Printer className="h-4 w-4" /> Print
            </button>
            <button onClick={handleLogout} className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900">
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Volunteer Info</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Program</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase print:hidden">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications.map((app) => (
                  <tr key={app._id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold">
                          {app.name?.charAt(0).toUpperCase()}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{app.name}</div>
                          <div className="text-sm text-gray-500">{app.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{app.program}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full border ${
                        app.status === 'Approved' ? 'bg-green-50 text-green-700 border-green-200' : 
                        app.status === 'Rejected' ? 'bg-red-50 text-red-700 border-red-200' : 
                        'bg-yellow-50 text-yellow-700 border-yellow-200'
                      }`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium print:hidden">
                      <div className="flex items-center gap-2">
                        {app.status === 'Pending' && (
                          <>
                            <button onClick={() => handleStatusUpdate(app._id, 'Approved')} className="text-green-600 bg-green-50 p-2 rounded-full hover:bg-green-100">
                              <CheckCircle className="h-5 w-5" />
                            </button>
                            <button onClick={() => handleStatusUpdate(app._id, 'Rejected')} className="text-red-600 bg-red-50 p-2 rounded-full hover:bg-red-100">
                              <XCircle className="h-5 w-5" />
                            </button>
                          </>
                        )}
                        <button onClick={() => handleDelete(app._id)} className="text-gray-400 p-2 hover:bg-gray-100 rounded-full ml-2">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin; 
