import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ClipboardList, Award, HandHeart, User } from 'lucide-react';

const API_BASE_URL = "http://localhost:5000"; 

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [myApps, setMyApps] = useState([]); 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    
    if (!storedUser) {
      navigate('/login');
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);

    // Fetch user's applications
    axios.get(`${API_BASE_URL}/api/my-applications/${parsedUser._id}`)
      .then(res => {
        setMyApps(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading apps:", err);
        setLoading(false);
      });
      
  }, [navigate]);

  const handleApply = async (programName) => {
    if (!user) return;
    try {
      await axios.post(`${API_BASE_URL}/api/apply`, {
        userId: user._id,
        name: user.name,
        email: user.email,
        program: programName
      });
      alert(`Successfully applied for ${programName}!`);
      window.location.reload(); 
    } catch (err) {
      alert(err.response?.data?.error || "You have already applied for this!");
    }
  };

  const printCertificate = (appName) => {
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
      <div style="border: 10px solid #0d9488; padding: 50px; text-align: center; font-family: serif;">
        <h1 style="color: #0d9488; font-size: 50px;">Certificate of Appreciation</h1>
        <p>This is to certify that</p>
        <h2 style="font-size: 30px;">${user.name}</h2>
        <p>Has successfully volunteered for the</p>
        <h3 style="font-size: 24px;">${appName} Program</h3>
        <p>at UYWS Organization.</p>
        <br/><br/>
        <p>__________________</p>
        <p>Director Signature</p>
      </div>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  if (loading) return <div className="p-10 text-center text-gray-500">Loading Dashboard...</div>;
  if (!user) return null; 

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* HEADER */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center gap-4">
          <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome, {user.name}</h1>
            <p className="text-gray-500 text-sm">Volunteer Dashboard</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        
        {/* SECTION 1: ACTION CARDS */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <HandHeart className="text-teal-600" /> Open Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Clean Water Drive', 'Education For All', 'Tree Plantation', 'Medical Camp'].map((prog) => (
              <div key={prog} className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition group">
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-teal-700 transition">{prog}</h3>
                <p className="text-sm text-gray-500 mt-2 mb-4">Make a difference by joining the {prog} team.</p>
                <button 
                  onClick={() => handleApply(prog)}
                  className="w-full py-2 bg-teal-50 text-teal-700 font-bold rounded-lg hover:bg-teal-600 hover:text-white transition"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: APPLICATION STATUS */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center gap-2">
            <ClipboardList className="text-teal-600" />
            <h2 className="text-xl font-bold text-gray-800">My Applications</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 text-gray-500 text-sm uppercase">
                <tr>
                  <th className="p-4 font-semibold">Program</th>
                  <th className="p-4 font-semibold">Date Applied</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold">Certificate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {myApps.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="p-8 text-center text-gray-400">
                      You haven't applied to any programs yet. <br/>
                      Click "Apply Now" on the cards above!
                    </td>
                  </tr>
                ) : (
                  myApps.map((app) => (
                    <tr key={app._id} className="hover:bg-gray-50 transition">
                      <td className="p-4 font-medium text-gray-900">{app.program}</td>
                      <td className="p-4 text-gray-500 text-sm">{new Date(app.appliedDate).toLocaleDateString()}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                          app.status === 'Approved' ? 'bg-green-50 text-green-700 border-green-200' : 
                          app.status === 'Rejected' ? 'bg-red-50 text-red-700 border-red-200' : 
                          'bg-yellow-50 text-yellow-700 border-yellow-200'
                        }`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="p-4">
                        {app.status === 'Approved' ? (
                          <button 
                            onClick={() => printCertificate(app.program)}
                            className="flex items-center gap-1 text-teal-700 font-bold text-sm hover:underline"
                          >
                            <Award className="h-4 w-4" /> Print
                          </button>
                        ) : (
                          <span className="text-gray-300 text-xs italic">Locked</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;