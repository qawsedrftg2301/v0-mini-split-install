import Image from "next/image"
import { Header } from "@/components/header"
import { HowItWorks } from "@/components/how-it-works"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7fa]">
      <Header />
      <main className="flex-1 flex flex-col justify-between p-2.5 max-w-[900px] mx-auto w-full">
        <HowItWorks />
        <WhyChooseUs />
        <Pricing />
        <div className="my-2">
          <Image
            src="/images/install.jpg"
            alt="Mini-split outdoor unit installation"
            width={900}
            height={600}
            className="w-full h-auto rounded-lg shadow-sm"
          />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
