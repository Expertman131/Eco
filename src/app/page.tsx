import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { Risks } from "@/components/landing/risks";
import { Services } from "@/components/landing/services";
import { Documents } from "@/components/landing/documents";
import { Process } from "@/components/landing/process";
import { Advantages } from "@/components/landing/advantages";
import { Pricing } from "@/components/landing/pricing";
import { Clients } from "@/components/landing/clients";
import { CtaBand } from "@/components/landing/cta-band";
import { Faq } from "@/components/landing/faq";
import { LeadForm } from "@/components/landing/lead-form";
import { SiteFooter } from "@/components/landing/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Risks />
        <Services />
        <Documents />
        <Process />
        <Advantages />
        <Pricing />
        <Clients />
        <CtaBand />
        <Faq />
        <LeadForm />
      </main>
      <SiteFooter />
    </div>
  );
}
