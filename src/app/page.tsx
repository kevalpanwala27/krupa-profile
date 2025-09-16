import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Industries from '../components/Industries';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ClientOnly from '../components/ClientOnly';
import HashScroll from '../components/HashScroll';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ClientOnly>
        <Navbar />
      </ClientOnly>
      <ClientOnly>
        <Hero />
      </ClientOnly>
      <ClientOnly>
        <HashScroll />
      </ClientOnly>
      <About />
      <Products />
      <Industries />
      <Clients />
      <Contact />
      <ClientOnly>
        <Footer />
      </ClientOnly>
    </div>
  );
}
