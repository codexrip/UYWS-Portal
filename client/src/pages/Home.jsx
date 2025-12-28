import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sprout, HandHeart, Laptop, 
  Quote, ChevronRight 
} from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Volunteers working together"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
            Building a Better Future <br />
            <span className="text-teal-400">For Everyone.</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            Join UYWS in our mission to uplift communities through education, healthcare, and sustainable environmental initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/initiatives" className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full transition shadow-lg flex items-center justify-center gap-2">
              Our Initiatives <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/donate" className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-full transition shadow-lg">
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* 2. ABOUT UYWS (Short) */}
      <div className="py-24 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h5 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-3">Who We Are</h5>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">About UYWS</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            United Youth for Welfare and Social Service (UYWS) is dedicated to creating a world where every person has access to education, healthcare, clean water, and opportunities for a sustainable future. We unite communities, empower marginalized groups, and advocate for human rights.
          </p>
          <Link to="/about" className="inline-flex items-center text-teal-700 font-semibold hover:text-teal-500 transition border-b-2 border-teal-700 hover:border-teal-500 pb-1">
            Learn More About Us <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>

      {/* 3. FEATURED PROJECTS */}
      <div className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group">
              <div className="h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1541976844346-618be1940559?auto=format&fit=crop&w=800&q=80" alt="Clean Water" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Clean Water Initiative</h3>
                <p className="text-gray-600 text-sm mb-4">Providing accessible clean water to rural communities through solar-powered pumps.</p>
                <Link to="/projects/water" className="text-teal-600 text-sm font-bold uppercase tracking-wide hover:underline">Read Story</Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group">
              <div className="h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" alt="Education" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Education for All</h3>
                <p className="text-gray-600 text-sm mb-4">Building schools and providing digital learning resources for underprivileged children.</p>
                <Link to="/projects/education" className="text-teal-600 text-sm font-bold uppercase tracking-wide hover:underline">Read Story</Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition group">
              <div className="h-56 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" alt="Healthcare" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Community Health</h3>
                <p className="text-gray-600 text-sm mb-4">Establishing local clinics and medical camps for essential healthcare access.</p>
                <Link to="/projects/health" className="text-teal-600 text-sm font-bold uppercase tracking-wide hover:underline">Read Story</Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 4. OUR CORE INITIATIVES */}
      <div className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Core Initiatives</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Focusing on key areas critical for a sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-gray-100 rounded-xl hover:shadow-lg transition">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-600">
                <Sprout className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Green Pakistan</h3>
              <p className="text-sm text-gray-600">Aggressive climate action and environmental resilience.</p>
            </div>
            
            <div className="text-center p-8 border border-gray-100 rounded-xl hover:shadow-lg transition">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-600">
                <HandHeart className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Social Dignity</h3>
              <p className="text-sm text-gray-600">Holistic empowerment for marginalized communities.</p>
            </div>

            <div className="text-center p-8 border border-gray-100 rounded-xl hover:shadow-lg transition">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-600">
                <Laptop className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Digital Future</h3>
              <p className="text-sm text-gray-600">Bridging the digital skills gap for youth.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. GALLERY PREVIEW */}
      <div className="bg-gray-50 py-20 px-4 text-center">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10">Gallery Preview</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=500&q=80" className="rounded-lg h-48 w-full object-cover hover:opacity-90 transition" alt="Gallery 1" />
          <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=500&q=80" className="rounded-lg h-48 w-full object-cover hover:opacity-90 transition" alt="Gallery 2" />
          <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=500&q=80" className="rounded-lg h-48 w-full object-cover hover:opacity-90 transition" alt="Gallery 3" />
          <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=500&q=80" className="rounded-lg h-48 w-full object-cover hover:opacity-90 transition" alt="Gallery 4" />
        </div>
        <Link to="/gallery" className="px-6 py-2 border border-teal-600 text-teal-600 rounded hover:bg-teal-600 hover:text-white transition font-medium">
          View Full Gallery
        </Link>
      </div>

      {/* 6. IMPACT STORIES */}
      <div className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-16">Impact Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Story 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
              <Quote className="absolute top-6 left-6 h-8 w-8 text-teal-100" />
              <p className="text-gray-600 italic mb-6 relative z-10 pt-6">
                "Thanks to UYWS, our village now has clean water. We no longer have to walk miles every day, and our children are healthier."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-teal-200 rounded-full flex items-center justify-center font-bold text-teal-800">A</div>
                <div>
                  <h4 className="font-bold text-sm">Asha Devi</h4>
                  <p className="text-xs text-gray-500">Community Member</p>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
              <Quote className="absolute top-6 left-6 h-8 w-8 text-teal-100" />
              <p className="text-gray-600 italic mb-6 relative z-10 pt-6">
                "Volunteering with UYWS taught me that small actions create huge ripples. It has been the most rewarding experience of my life."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-teal-200 rounded-full flex items-center justify-center font-bold text-teal-800">J</div>
                <div>
                  <h4 className="font-bold text-sm">John Smith</h4>
                  <p className="text-xs text-gray-500">Volunteer</p>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
              <Quote className="absolute top-6 left-6 h-8 w-8 text-teal-100" />
              <p className="text-gray-600 italic mb-6 relative z-10 pt-6">
                "The scholarship I received from UYWS allowed me to complete my degree. Now I am working to support my family."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-teal-200 rounded-full flex items-center justify-center font-bold text-teal-800">F</div>
                <div>
                  <h4 className="font-bold text-sm">Fatima Ali</h4>
                  <p className="text-xs text-gray-500">Student Beneficiary</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 7. JOIN OUR MOVEMENT */}
      <div className="bg-teal-700 py-24 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
          Join Our Movement
        </h2>
        <p className="text-teal-100 max-w-2xl mx-auto mb-10 text-lg">
          Be the change you want to see. Participate in community projects, skill-based workshops, and help us build a better tomorrow.
        </p>
        <Link 
          to="/volunteer" 
          className="inline-block bg-white text-teal-800 hover:bg-teal-50 px-10 py-4 rounded-full text-lg font-bold transition shadow-lg"
        >
          Become a Volunteer
        </Link>
      </div>

    </div>
  );
};

export default Home;