import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Ourproduct"));
const Projects = lazy(() => import("./pages/Ourprojects"));
const Team = lazy(() => import("./pages/Ourteam"));
const Contact = lazy(() => import("./pages/Contact"));

const Plist = lazy(() => import("./pages/ProductList"));
const Pdetails = lazy(() => import("./pages/ProductDetails"));




function App() {
  return (
    <Router>
      {
        
      }
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />}>
            <Route path="list" element={<Plist />} />
            <Route path=":productId" element={<Pdetails />} />
          </Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} /> {/* 404 Route */}
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
