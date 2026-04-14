import React from "react";
import { Container } from "./Layout";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 py-16">
      <Container>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-10">
          
          {/* BRAND */}
          <div>
            <div className="text-xl font-black text-green-600 mb-4">
              EcoConnect
            </div>
            <p className="text-sm leading-relaxed">
              Connecting Coventry with sustainable businesses and eco-friendly services.
            </p>
          </div>

          {/* SECTIONS */}
          {["Learn", "Platform", "Community"].map((section) => (
            <div key={section}>
              <h4 className="text-slate-900 font-bold mb-4">
                {section}
              </h4>

              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-green-600 transition-colors">
                    Eco Businesses
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-green-600 transition-colors">
                    Sustainability Tips
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-green-600 transition-colors">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          ))}

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between gap-4 text-xs">
          
          <p>© {new Date().getFullYear()} EcoConnect</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-green-600">Privacy</a>
            <a href="#" className="hover:text-green-600">Terms</a>
            <a href="#" className="hover:text-green-600">GitHub</a>
          </div>

        </div>

      </Container>
    </footer>
  );
};

export default Footer;