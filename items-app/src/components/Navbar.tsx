import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Layout';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100">
      <Container>
        <div className="flex justify-between items-center h-24">
          
          {/* LOGO */}
          <div className="text-2xl font-black italic tracking-tighter text-green-600">
            ECO<span className="text-slate-900">CONNECT</span>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { label: 'Home', to: '/' },
              { label: 'Items', to: '/items' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-bold text-slate-500 hover:text-green-600 transition-colors uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-6">
            <button className="hidden sm:block text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">
              Sign In
            </button>

            <Button 
              variant="eco" 
              className="!rounded-full !py-2 !px-6 text-sm"
            >
              Join Now
            </Button>
          </div>

        </div>
      </Container>
    </nav>
  );
};

export default Navbar;