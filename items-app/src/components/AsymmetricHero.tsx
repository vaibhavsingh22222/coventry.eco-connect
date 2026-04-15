import React from 'react';
import { Heading, Text } from './Typography';
import { Button } from './Button';

export const AsymmetricHero: React.FC = () => {
  return (
    //  CHANGE: added bg color for better section visibility
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="relative z-10">
            <Heading level={1} className="mb-6">
              Discover Coventry's <br /> 
              <span className="text-green-600">EcoConnect</span> Directory.
            </Heading>

            {/*  FIX: improved readability (line break + spacing) */}
            <Text className="text-xl mb-8 text-slate-600 leading-relaxed max-w-xl">
              Your go-to guide for eco-conscious businesses and services in 
              Coventry and Warwickshire. Find zero-waste shops, repair cafes, 
              and local food producers near you.
            </Text>
            
            {/*  CHANGE: better mobile responsiveness */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="success">Explore Businesses</Button>
              <Button variant="success">Join Community</Button>
            </div>

            {/*  FIX: accessibility improvement (alt text unique) */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i+10}`} 
                      alt={`User ${i}`}   //  FIX
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Joined by <span className="text-slate-900 font-bold">2,000+</span> eco-conscious members this week
              </p>
            </div>
          </div>

          {/* Right Side: Visual Element */}
          <div className="relative">
            {/* CHANGE: reduced blur for performance */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-50 rounded-full blur-2xl -z-10" />
            
            {/* Decorative "Mock" UI Card */}
            {/* CHANGE: smoother hover */}
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 rotate-2 hover:rotate-0 transition-all duration-500">
               
               <div className="bg-slate-900 rounded-2xl overflow-hidden p-1 shadow-inner">
                  <div className="flex gap-1.5 p-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>

                  {/*  FIX: consistent spacing */}
                  <div className="p-6 pt-0 font-mono text-sm space-y-2">
                    <p className="text-green-400">
                      const <span className="text-white">Business</span> = {"{"}
                    </p>
                    <p className="pl-4 text-slate-400">
                      category: [<span className="text-emerald-400">'Zero-Waste', 'Repair', 'Local'</span>],
                    </p>
                    <p className="pl-4 text-slate-400">
                      location: <span className="text-amber-400">'Coventry'</span>,
                    </p>
                    <p className="pl-4 text-slate-400">
                      rating: <span className="text-emerald-400">5</span>
                    </p>
                    <p className="text-green-400">{"}"}</p>
                  </div>
               </div>
               
               {/* CHANGE: smoother animation (less aggressive than bounce) */}
               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 animate-pulse">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                      
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase">Status</p>
                      <p className="text-sm font-bold text-slate-900">Coventry Verified</p>
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