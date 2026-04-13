import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function HomePage() {
   return (
      <>
         <Navbar />
         <Hero />
         <AboutUs />
         <Services />
         <Testimonials />
         <Footer />
      </>
   );
}
