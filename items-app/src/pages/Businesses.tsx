import { Link } from "react-router-dom";

const businesses = [
  {
    id: 1,
    name: "Green Leaf Cafe",
    description: "Zero waste eco-friendly cafe",
    items: [
      { id: 1, name: "Organic Coffee", price: 5 },
      { id: 2, name: "Vegan Sandwich", price: 7 }
    ]
  },
  {
    id: 2,
    name: "Eco Repair Hub",
    description: "Repair electronics sustainably",
    items: [
      { id: 3, name: "Laptop Repair", price: 50 },
      { id: 4, name: "Phone Repair", price: 30 }
    ]
  }
];

export default function Businesses() {
  return (
    <div className="max-w-6xl mx-auto py-16">

      <h1 className="text-4xl font-bold text-center mb-10">
        Businesses 🌿
      </h1>

      <div className="space-y-10">

        {businesses.map((biz) => (
          <div
            key={biz.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >

            {/* BUSINESS INFO */}
            <h2 className="text-2xl font-bold text-green-600">
              {biz.name}
            </h2>

            <p className="text-slate-600 mt-1">
              {biz.description}
            </p>

            {/* ITEMS INSIDE BUSINESS */}
            <div className="mt-5 grid md:grid-cols-2 gap-4">

              {biz.items.map((item) => (
                <Link
                  key={item.id}
                  to={`/items/${item.id}`}
                  className="border border-slate-200 p-4 rounded-lg hover:border-green-300 hover:shadow transition"
                >
                  <p className="font-bold text-slate-900">
                    {item.name}
                  </p>

                  <p className="text-green-600 font-bold mt-1">
                    £{item.price}
                  </p>
                </Link>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}