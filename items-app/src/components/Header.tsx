import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <nav className="flex items-center gap-6">
        
        {/* BRAND (optional but good for assignment) */}
        <div className="font-bold text-lg tracking-wide">
          EcoConnect
        </div>

        {/* NAV LINKS */}
        <div className="flex gap-4 ml-auto">
          <Link 
            to="/" 
            className="hover:text-green-400 transition-colors"
          >
            Home
          </Link>

          <Link 
            to="/items" 
            className="hover:text-green-400 transition-colors"
          >
            Items
          </Link>
        </div>

      </nav>
    </header>
  );
}