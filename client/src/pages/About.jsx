import { Link } from 'react-router-dom';
import { 
  Target, Shield, Users, Leaf, Globe, Heart, 
  CheckCircle, Ban, Eye, Scale, Sun 
} from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      
      {/* 1. HERO SECTION (Matches Screenshot 2) */}
      <div className="bg-gray-600 text-white py-28 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
          About United Youth Welfare Society (UYWS)
        </h1> 
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          United Today for a Better World Tomorrow
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/volunteer" className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-3 rounded-md font-semibold transition">
            Join Us
          </Link>
          <Link to="/donate" className="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md font-semibold transition">
            Donate Now
          </Link>
        </div>
      </div>

      {/* 2. SLOGAN STRIP (Matches Screenshot 2 & 5) */}
      <div className="py-16 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-700 tracking-wide uppercase mb-2">
          Unite. Empower. Sustain.
        </h2>
        <p className="text-gray-500 italic text-lg">
          "United Today for a Better World Tomorrow."
        </p>
      </div>

      {/* 3. MISSION & VISION (Matches Screenshot 5) */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Left: Mission */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-teal-700" />
                <h2 className="text-3xl font-serif font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 mb-6">
                UYWS is dedicated to solving Pakistan's most critical social and environmental challenges through <strong>structured, youth-led action.</strong>
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Leaf className="h-6 w-6 text-teal-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Environmental Resilience</h4>
                    <p className="text-sm text-gray-600">Aggressive climate action through the Green Pakistan Initiative.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Heart className="h-6 w-6 text-teal-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Social Dignity</h4>
                    <p className="text-sm text-gray-600">Holistic empowerment and economic rehabilitation for Marginalized Communities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Globe className="h-6 w-6 text-teal-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Digital Future</h4>
                    <p className="text-sm text-gray-600">Bridging the skills gap through Education and Technology access for the youth.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Vision */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Eye className="h-8 w-8 text-teal-700" />
                <h2 className="text-3xl font-serif font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We envision a future for Pakistan where prosperity is fueled by <strong>holistic empowerment</strong>—where organized civil society and youth leadership guarantee long-term stability.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our goal is to be recognized as the benchmark for operational integrity and measurable impact in the non-profit sector, ensuring that <strong>every commitment (financial and environmental) is sustained</strong> for the next generation.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 4. OUR STORY (Matches Screenshot 4) */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-600 font-bold uppercase text-sm tracking-widest mb-2">Est. 2025: From Vision to Institution</p>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8">Our Story</h2>
          
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              United Youth Welfare Society (UYWS) was conceived in 2025 by a small group of passionate young professionals who shared a belief: that true social change requires more than good intentions—it requires institutional structure.
            </p>
            <p>
              We recognized the limitations of informal volunteering and resolved to build a platform that guarantees integrity. This led to the formal establishment of UYWS as a legally constituted Society (Registered under the Societies Registration Act, 1860).
            </p>
            <p>
              This institutional foundation is our promise to you. It ensures we operate with the highest degree of transparency and accountability.
            </p>
          </div>
        </div>
      </div>

      {/* 5. VALUES / WHAT WE STAND FOR (Matches Screenshot 1) */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-gray-500">We are a Society built on principle. These ten values guide every decision.</p>
          </div>

          {/* Section 1: Governance */}
          <div className="mb-16">
            <div className="flex justify-center items-center gap-3 mb-8">
              <Shield className="h-8 w-8 text-teal-700" />
              <h3 className="text-2xl font-serif font-bold text-gray-800">I. Governance & Accountability</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ValueCard 
                icon={<CheckCircle className="h-8 w-8 text-teal-600" />}
                title="Operational Integrity"
                desc="We uphold our commitment to strict Transparency and Accountability as enshrined in our Constitution."
              />
              <ValueCard 
                icon={<Ban className="h-8 w-8 text-teal-600" />}
                title="Non-Political Mandate"
                desc="UYWS is, and shall always remain, strictly non-political, non-sectarian, and non-partisan."
              />
              <ValueCard 
                icon={<Eye className="h-8 w-8 text-teal-600" />}
                title="Financial Transparency"
                desc="We commit to being fully accountable to our donors. All accounts are subject to external audit."
              />
            </div>
          </div>

          {/* Section 2: Social Justice */}
          <div>
            <div className="flex justify-center items-center gap-3 mb-8">
              <Users className="h-8 w-8 text-teal-700" />
              <h3 className="text-2xl font-serif font-bold text-gray-800">II. Social Justice & Empowerment</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ValueCard 
                icon={<Heart className="h-8 w-8 text-teal-600" />}
                title="Holistic Empowerment"
                desc="Supporting individuals and marginalized communities—especially Women, Youth, and Transgender Persons."
              />
              <ValueCard 
                icon={<Sun className="h-8 w-8 text-teal-600" />}
                title="Dignity Over Charity"
                desc="We prioritize projects that restore dignity and self-sufficiency, moving away from handouts."
              />
              <ValueCard 
                icon={<Scale className="h-8 w-8 text-teal-600" />}
                title="Radical Inclusion"
                desc="Creating equal opportunities for all, regardless of gender, background, religion, or identity."
              />
            </div>
          </div>

        </div>
      </div>

      {/* 6. IMPACT STATS (Matches Screenshot 3) */}
      <div className="bg-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-12">Our Impact at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="1,000+" label="Trees Planted" />
            <StatCard number="500+" label="People Empowered" />
            <StatCard number="500+" label="Students Supported" />
            <StatCard number="200+" label="Volunteers Engaged" />
          </div>
        </div>
      </div>

      {/* 7. TESTIMONIALS (Matches Screenshot 3 Bottom) */}
      <div className="py-20 bg-white text-center px-4">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12">What People Say About UYWS</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
            <p className="text-gray-600 italic text-lg mb-4">
              "Thanks to UYWS, our village now has clean water and our children can attend school safely. Our lives have been transformed."
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
            <p className="text-gray-600 italic text-lg mb-4">
              "Volunteering with UYWS has been an incredibly rewarding experience. Seeing the direct impact of our work is something I'll never forget."
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

// Helper Components for Cleaner Code

const ValueCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center border border-gray-100">
    <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
      {icon}
    </div>
    <h4 className="text-lg font-bold text-gray-900 mb-3">{title}</h4>
    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

const StatCard = ({ number, label }) => (
  <div>
    <div className="text-4xl md:text-5xl font-bold mb-2">{number}</div>
    <div className="text-teal-100 text-sm md:text-base uppercase tracking-wider">{label}</div>
  </div>
);

export default About;