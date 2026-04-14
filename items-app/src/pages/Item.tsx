import { useParams } from "react-router-dom";

export default function Item() {
  const { id } = useParams();

  return (
    <div className="max-w-3xl mx-auto py-16 text-center">
      
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">
        Eco Item Details 
      </h1>

      <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-8">
        
        <p className="text-lg text-slate-600 mb-4">
          You are viewing details for:
        </p>

        <p className="text-2xl font-bold text-green-600 mb-6">
          Item ID: {id}
        </p>

        <p className="text-slate-500 leading-relaxed">
          This page will later show full information about eco-friendly products, 
          sustainable services, or community items available in Coventry.
        </p>

      </div>
    </div>
  );
}