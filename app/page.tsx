import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductionCapacitiesSection from "@/components/sections/ProductionCapacitiesSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import AssortmentSection from "@/components/sections/AssortmentSection";
import DeliveryConditionsSection from "@/components/sections/DeliveryConditionsSection";
import AdditionalCapabilitiesSection from "@/components/sections/AdditionalCapabilitiesSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ContactsSection from "@/components/sections/ContactsSection";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-6">
          <Header />
          <main className="flex flex-col gap-20 py-20 md:gap-28 md:py-28">
            <HeroSection />
            <AboutSection />
            <ProductionCapacitiesSection />
            <CapabilitiesSection />
            <AssortmentSection />
            <DeliveryConditionsSection />
            <AdditionalCapabilitiesSection />
            <AdvantagesSection />
            <PartnersSection />
            <ContactsSection />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
