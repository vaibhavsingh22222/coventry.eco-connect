import React from 'react';
import { Container } from './Layout';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20">
      <Container>
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-16">
          
          {/* BRAND */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-white text-2xl font-black mb-6 italic">
              ECOCONNECT
            </div>
            <p className="text-sm leading-relaxed">
              Connecting Coventry with sustainable businesses, repair cafés, and eco-friendly services.
            </p>
          </div>

          {/* LINKS */}
          {['Learn', 'Platform', 'Community'].map((section) => (
            <div key={section}>
              <h4 className="text-white font-bold mb-6">{section}</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Eco Businesses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Sustainability Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Free Resources
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest font-semibold">
          
          <p>
            © {new Date().getFullYear()} EcoConnect. All rights reserved.
          </p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-green-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              GitHub
            </a>
          </div>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;