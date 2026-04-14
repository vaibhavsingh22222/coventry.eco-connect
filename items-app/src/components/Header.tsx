import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white text-slate-900 px-6 py-4 shadow-sm border-b border-slate-200">
      
      <div className="flex items-center">

        {/* LOGO */}
        <div className="text-xl font-black tracking-tight text-green-600">
          Eco<span className="text-slate-900">Connect</span>
        </div>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-10 mx-auto">
          
          <Link
            to="/"
            className="text-sm font-bold hover:text-green-600 transition-colors"
          >
            Home
          </Link>

          <Link
            to="/items"
            className="text-sm font-bold hover:text-green-600 transition-colors"
          >
            Items
          </Link>

        </nav>

      </div>

    </header>
  );
}