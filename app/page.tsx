import { AceHeading } from "@/components/global/ace-heading";
import { HeroParallax } from "@/components/global/connect-parallax";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { FeaturesCard } from "@/components/global/features-card";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from "@/components/global/Lamp";
import Navbar from "@/components/global/Navbar";
import { ExpandableCardDemo } from "@/components/global/our-team-component";
import { CardStackDemo } from "@/components/global/testimonial-card";
import { FooterComp } from "@/components/global/footer-comp";
import { Button } from "@/components/ui/button";
import { clients, products } from "@/lib/constant";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <Navbar/>
    <section className="h-screen w-full  bg-black rounded-md  !overflow-visible relative flex flex-col items-center  antialiased mt-[-100px]">
    <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]">
    {/* <div className="flex flex-col mt-[-100px] md:mt-[-50px]"> */}
      <ContainerScroll
        titleComponent ={
          <div className="flex items-center flex-col">
          {/* <Button
            size={'lg'}
            className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
              Start For Free Today
            </span>
          </Button> */}
          <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
            We are the AV1ATORS
          </h1>
        </div>
        }
      />
    {/* </div> */}
    </div>
    </section>
    <section className="flex items-center justify-center ">
    <InfiniteMovingCards
        className="md:mt-[18rem] mt-[-100px]"
        items={clients}
        direction="right"
        speed="slow"
      />
    </section>
    <section>
      <HeroParallax products={products}></HeroParallax>
    </section>
    <section className="mt-[-500px]">
    <LampComponent />
    </section>
    <section className="mt-[-300px]">
      <FeaturesCard/>
    </section>
    <section className="mt-[-200px]">
    <AceHeading title="Our Team"/>
    </section>
    <section className="mt-[-150px]">
      <ExpandableCardDemo/>
    </section>
    <section className="mt-[-100px]">
     <AceHeading title="Testimonials"/>
    </section>
    <section className="mt-[-200px] mb-32">
    <CardStackDemo/>
    </section>
    <section>
      <FooterComp/>    
    </section>
   </main>
  );
}
