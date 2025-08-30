import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Industries from '../components/Industries';
import WhyChooseUs from '../components/WhyChooseUs';
import Clients from '../components/Clients';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ClientOnly from '../components/ClientOnly';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <ClientOnly>
        <Hero />
      </ClientOnly>
      <About />
      <Products />
      <Industries />
      <WhyChooseUs />
      <Clients />
      <Gallery />
      <Contact />
      <ClientOnly>
        <Footer />
      </ClientOnly>
    </div>
  );
}
