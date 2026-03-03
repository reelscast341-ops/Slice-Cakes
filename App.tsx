import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { TalentCard } from './components/TalentCard';
import { JobCard } from './components/JobCard';
import { AgenciesSection } from './components/AgenciesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { MOCK_CREATORS, MOCK_JOBS } from './constants';
import { Creator } from './types';
import { Search, Sparkles, ArrowRight, Star, Users, Building, ShieldCheck } from 'lucide-react';
import { parseSearchQuery } from './services/geminiService';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'talent' | 'jobs'>('talent');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSearching, setIsSearching] = useState(false);
  const [filteredCreators, setFilteredCreators] = useState<Creator[]>(MOCK_CREATORS);
  const [aiReasoning, setAiReasoning] = useState<string | null>(null);
  
  // Ref for the search input to handle auto-focus if needed
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setSelectedCategory('All'); // Reset category selection on manual search
    
    if (!searchQuery.trim()) {
      setFilteredCreators(MOCK_CREATORS);
      setAiReasoning(null);
      return;
    }

    setIsSearching(true);
    setAiReasoning(null);

    // AI Search Logic
    const criteria = await parseSearchQuery(searchQuery);
    
    // Client-side filtering based on AI extracted criteria
    const filtered = MOCK_CREATORS.filter(creator => {
      let score = 0;
      
      // Role match
      if (criteria.role && creator.role.toLowerCase().includes(criteria.role.toLowerCase())) {
        score += 5;
      }
      
      // Location match
      if (criteria.location && creator.location.toLowerCase().includes(criteria.location.toLowerCase())) {
        score += 3;
      }

      // Keyword/Tag match
      criteria.keywords.forEach(keyword => {
        const k = keyword.toLowerCase();
        if (creator.tags.some(t => t.toLowerCase().includes(k))) score += 2;
        if (creator.bio.toLowerCase().includes(k)) score += 1;
        if (creator.role.toLowerCase().includes(k)) score += 2;
      });

      return score > 0;
    });

    setFilteredCreators(filtered.length > 0 ? filtered : []); // If empty, show none or handle empty state
    setAiReasoning(criteria.reasoning);
    setIsSearching(false);
    setActiveTab('talent'); // Switch to talent view on search
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery('');
    setAiReasoning(null);
    setActiveTab('talent');

    if (category === 'All') {
      setFilteredCreators(MOCK_CREATORS);
    } else {
      // Remove 's' to match singular Role in types (Models -> Model)
      const role = category.slice(0, -1);
      const filtered = MOCK_CREATORS.filter(creator => creator.role.includes(role));
      setFilteredCreators(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase">New Castings Added Daily</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-8 tracking-tight leading-[1.1]">
            Find the Perfect <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
              Creative Talent
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12 leading-relaxed">
            Connect with top-tier models, photographers, and stylists. 
            Use our AI-powered search to find exactly who you need for your next campaign.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <form onSubmit={handleSearch} className="relative bg-white rounded-2xl shadow-xl p-2 flex items-center border border-gray-100">
              <div className="pl-4 text-gray-400">
                <Sparkles size={20} className={isSearching ? "animate-pulse text-accent" : ""} />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Describe who you are looking for... (e.g. 'Edgy photographer in Tokyo')"
                className="w-full px-4 py-3 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none text-base"
              />
              <button 
                type="submit"
                disabled={isSearching}
                className="bg-primary hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-medium transition-all flex items-center gap-2 disabled:opacity-70"
              >
                {isSearching ? 'Searching...' : 'Search'}
              </button>
            </form>
          </div>
          
          {aiReasoning && (
             <div className="max-w-3xl mx-auto mt-4 p-3 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-800 text-left flex items-start gap-2">
               <Sparkles size={16} className="mt-0.5 flex-shrink-0" />
               <p><strong>AI Insight:</strong> {aiReasoning}</p>
             </div>
          )}
        </div>
        
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-yellow-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-gray-100/50 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Agencies Marquee Section */}
      <AgenciesSection />

      {/* Main Content Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="talent">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div>
             <h2 className="text-3xl font-serif font-bold mb-4">Featured Categories</h2>
             <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg inline-flex">
               <button 
                 onClick={() => setActiveTab('talent')}
                 className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${activeTab === 'talent' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-primary'}`}
               >
                 Find Talent
               </button>
               <button 
                 onClick={() => setActiveTab('jobs')}
                 className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all ${activeTab === 'jobs' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-primary'}`}
               >
                 Browse Jobs
               </button>
             </div>
           </div>
           
           <div className="hidden md:flex gap-4">
              {['All', 'Models', 'Photographers', 'Stylists'].map(cat => (
                <button 
                  key={cat} 
                  onClick={() => handleCategoryFilter(cat)} 
                  className={`px-4 py-2 border border-gray-200 rounded-full text-xs font-bold uppercase tracking-wide transition-colors ${
                    selectedCategory === cat 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-white hover:border-primary text-gray-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>

        {/* Dynamic Grid */}
        {activeTab === 'talent' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCreators.map((creator) => (
              <TalentCard key={creator.id} creator={creator} />
            ))}
            {filteredCreators.length === 0 && (
              <div className="col-span-full py-20 text-center text-gray-500 bg-white rounded-2xl border border-dashed border-gray-300">
                <Search size={48} className="mx-auto mb-4 opacity-20" />
                <p className="text-lg">No talent found matching your criteria.</p>
                <button onClick={() => {setSearchQuery(''); setFilteredCreators(MOCK_CREATORS); setAiReasoning(null);}} className="mt-4 text-primary underline">Clear Search</button>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_JOBS.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </section>
      
      {/* Stats / Trust Section */}
      <section className="bg-primary text-white py-20 mt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-serif font-bold text-accent">32+</div>
            <div className="text-sm uppercase tracking-widest opacity-70">Agencies</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-serif font-bold text-accent">120+</div>
            <div className="text-sm uppercase tracking-widest opacity-70">Talents</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-serif font-bold text-accent">6</div>
            <div className="text-sm uppercase tracking-widest opacity-70">Daily Castings</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-serif font-bold text-accent">83%</div>
            <div className="text-sm uppercase tracking-widest opacity-70">Match Rate</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-serif font-bold mb-4">Why ModelsCasting?</h2>
             <p className="text-gray-600">Built for the modern creative industry.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Verified Profiles</h3>
                <p className="text-gray-500 leading-relaxed">
                  Every talent is manually verified to ensure safety and professionalism on set.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Direct Connection</h3>
                <p className="text-gray-500 leading-relaxed">
                  No middleman fees. Chat directly with agencies and directors to book jobs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <Building size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Reach</h3>
                <p className="text-gray-500 leading-relaxed">
                  Access opportunities in major fashion capitals: NYC, Paris, London, and Tokyo.
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* CTA - Hidden for now */}
      {false && (
      <section className="py-20 bg-gray-100 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-16 text-center shadow-xl border border-gray-100">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to get scouted?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
            Join the fastest growing community of creative talent. Create your portfolio today.
          </p>
          <button className="bg-primary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto">
            Create Free Profile <ArrowRight size={20} />
          </button>
        </div>
      </section>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold mb-4">ModelsCasting</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Talent</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-primary">Success Stories</a></li>
              <li><a href="#" className="hover:text-primary">Resources</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Agencies</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary">Post a Job</a></li>
              <li><a href="#" className="hover:text-primary">Talent Search</a></li>
              <li><a href="#" className="hover:text-primary">Pricing</a></li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary">Help Center</a></li>
              <li><a href="#" className="hover:text-primary">Safety</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2024 ModelsCasting Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <a href="#">Privacy</a>
             <a href="#">Terms</a>
             <a href="#">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;