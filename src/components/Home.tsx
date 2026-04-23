import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import OrderTicker from "./sections/OrderTicker";
import Stats from "./sections/Stats";
import AISection from "./sections/AISection";
import Features from "./sections/Features";
import Campuses from "./sections/Campuses";
import Roles from "./sections/Roles";
import Footer from "./layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OrderTicker />
        <Stats />
        <AISection />
        <Features />
        <Campuses />
        <Roles />
      </main>
      <Footer />
    </>
  );
}
