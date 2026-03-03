import React, { useState } from 'react';
import { MapPin, Mail, Send, Phone } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    // Simulate form submission
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about casting, membership, or partnerships? Send us a message or visit our HQ.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Jane Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="jane@example.com" required />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Collaboration Inquiry" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="How can we help you?" required></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                {formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Map & Info */}
          <div className="bg-gray-50 p-2 rounded-3xl border border-gray-100" id="map-location">
             <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                {/* Google Map Embed */}
                <div className="w-full h-80 bg-gray-200 relative">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?q=776,+Govindpuri,+New+Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    title="Office Location"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
                
                <div className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Our Office</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        776, Govindpuri<br />
                        New Delhi, Delhi 110019<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                      <a href="mailto:divyanshonomy@gmail.com" className="text-primary hover:underline text-sm font-medium">
                        divyanshonomy@gmail.com
                      </a>
                      <p className="text-gray-500 text-xs mt-1">We typically reply within 24 hours.</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};