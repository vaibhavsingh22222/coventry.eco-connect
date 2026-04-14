export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center py-16">
      
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
        Welcome to EcoConnect 🌿
      </h1>

      <p className="text-lg text-slate-600 leading-relaxed mb-10">
        Discover sustainable businesses, eco-friendly services, and local green initiatives 
        in Coventry. Build a cleaner and smarter future with your community.
      </p>

      <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Start Exploring
        </h2>

        <p className="text-slate-500">
          Use the navigation above to browse eco-friendly items, view details, and support local sustainability projects.
        </p>
      </div>

    </div>
  );
}