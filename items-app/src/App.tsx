import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Items from "./pages/Items";
import Item from "./pages/Item";
import Businesses from "./pages/Businesses";
import Reviews from "./pages/reviews";

function App() {
  return (
    <BrowserRouter>

      <div className="flex flex-col min-h-screen">

        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="flex-1 bg-slate-50 p-6">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
            <Route path="/items/:id" element={<Item />} />

            <Route path="/businesses" element={<Businesses />} />
            <Route path="/reviews" element={<Reviews />} />

          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;