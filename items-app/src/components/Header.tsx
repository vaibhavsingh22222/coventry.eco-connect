import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 shadow-sm">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-xl font-black text-green-600">
          Eco<span className="text-slate-900">Connect</span>
        </div>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-8 text-sm font-bold text-slate-600">

          <Link className="hover:text-green-600" to="/">
            Home
          </Link>

          <Link className="hover:text-green-600" to="/items">
            Items
          </Link>

          <Link className="hover:text-green-600" to="/businesses">
            Businesses
          </Link>

          <Link className="hover:text-green-600" to="/reviews">
            Reviews
          </Link>

        </nav>

      </div>

    </header>
  );
}