import { Link } from "react-router-dom";
import type { Item } from "../types/Item";

const items: Item[] = [
  { id: 1, name: "Laptop", description: "Portable computer", price: 1200 },
  { id: 2, name: "Phone", description: "Smartphone", price: 800 },
  { id: 3, name: "Keyboard", description: "Mechanical keyboard", price: 120 }
];

export default function Items() {
  return (
    <div className="max-w-5xl mx-auto py-16">
      
      <h1 className="text-4xl font-extrabold text-slate-900 mb-10 text-center">
        Eco Items Collection 🌿
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/items/${item.id}`}
            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 group"
          >
            <h2 className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
              {item.name}
            </h2>

            <p className="text-slate-500 mt-2 text-sm">
              {item.description}
            </p>

            <p className="mt-4 font-bold text-green-600">
              £{item.price}
            </p>

            <p className="mt-6 text-xs text-slate-400 group-hover:text-green-500 transition-colors">
              Click to view details →
            </p>
          </Link>
        ))}
      </div>

    </div>
  );
}