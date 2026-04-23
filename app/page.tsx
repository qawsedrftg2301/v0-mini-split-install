import Image from "next/image"
import { Header } from "@/components/header"
import { HowItWorks } from "@/components/how-it-works"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-[900px] mx-auto px-3 py-3 flex flex-col justify-between gap-4">
        <HowItWorks />
        <WhyChooseUs />
        <Pricing />
        <div className="rounded-lg overflow-hidden shadow-sm">
          <Image
            src="/images/mini-split.jpg"
            alt="Mini-split heat pump installation"
            width={900}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
