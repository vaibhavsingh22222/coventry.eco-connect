import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white px-6 py-4 shadow-md border-b border-slate-800">
      
      <div className="flex items-center">

        {/* LOGO */}
        <div className="text-xl font-black tracking-tight text-green-500">
          Eco<span className="text-white">Connect</span>
        </div>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-10 mx-auto">
          
          <Link
            to="/"
            className="text-sm font-bold hover:text-green-400 transition-colors"
          >
            Home
          </Link>

          <Link
            to="/items"
            className="text-sm font-bold hover:text-green-400 transition-colors"
          >
            Items
          </Link>

        </nav>

      </div>

    </header>
  );
}