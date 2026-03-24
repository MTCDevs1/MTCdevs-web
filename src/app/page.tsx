import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solutions from "@/components/Solutions";
import WhyGoDev from "@/components/WhyGoDev";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Portfolio from "@/components/Portfolio";
import LeadMagnet from "@/components/LeadMagnet";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Problems />
      <Solutions />
      <WhyGoDev />
      <Process />
      <BeforeAfter />
      <Portfolio />
      <LeadMagnet />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
