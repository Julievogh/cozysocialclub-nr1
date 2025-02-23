import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Section id="popup" title="Pop-Up" text="Experience our pop-up food!" image="/popup.jpg" />
      <Section id="catering" title="Catering" text="Fine dining experience." image="/catering.jpg" reverse />
      <Testimonials />
      <AboutUs id="about" />
      <Footer />
    </main>
  );
}
