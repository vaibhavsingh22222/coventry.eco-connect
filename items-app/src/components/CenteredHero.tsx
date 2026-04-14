import React from 'react';
import { Container } from './Layout';
import { Heading, Text } from './Typography';
import { Button } from './Button';

export const CenteredHero: React.FC = () => {
  return (
    // ❗ CHANGE: added bg-white fallback for better contrast
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-green-100/50 blur-[120px] rounded-full -z-10" />
      
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          
          {/* ❗ FIX: better spacing on small screens */}
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase text-green-600 bg-green-50 rounded-full">
            Coventry's Green Directory
          </div>
          
          <Heading level={1} className="mb-6 leading-[1.1]">
            Discover{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              eco-friendly businesses
            </span>{" "}
            near you.
          </Heading>
          
          {/* ❗ FIX: improved readability */}
          <Text className="text-xl mb-10 text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A community-driven platform connecting Coventry residents with 
            sustainable businesses, repair cafes, and local green services.
          </Text>
          
          {/* ❗ CHANGE: better button responsiveness */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="eco" 
              className="w-full sm:w-auto px-10 py-4 text-lg"
            >
              Explore Businesses
            </Button>

            {/* ❗ FIX: added focus state (accessibility) */}
            <button className="px-8 py-3 font-bold text-slate-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors">
              Learn More →
            </button>
          </div>

          {/* ❗ CHANGE: spacing improved for consistency */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
              Supported by Coventry's green community
            </p>

            {/* ❗ FIX: better wrapping on small screens */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale text-center">
               <div className="font-bold text-xl text-slate-800 tracking-tighter italic">GreenLeap</div>
               <div className="font-bold text-xl text-slate-800 tracking-tighter italic">EcoWarwickshire</div>
               <div className="font-bold text-xl text-slate-800 tracking-tighter italic">RepairCafe CV</div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};