import Aboutus from "@/components/Aboutus";
import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import NewsBlogs from "@/components/NewsBlogs";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";

import Image from "next/image";

export default function HomePage() {
  return (
    <Main className="">
      <Hero />
      <Aboutus />
      <Services />
      <WhyUs />
      <NewsBlogs />
      <CallToAction />
    </Main>
  );
}
