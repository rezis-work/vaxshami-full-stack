"use client";

import { motion } from "framer-motion";
import BannerContent from "../components/bannerContent";

const HeroBanner = () => {
  return (
    <section className="relative w-full flex flex-col-reverse overflow-hidden">
      <motion.div
        className="w-full inset-0 bg-[url('/hero-page.png')] bg-cover bg-center aspect-[4/2.8] lg:aspect-[4/2] xl:aspect-[4/1.5]"
        initial={{ scale: 0.76, opacity: 0.95 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ originY: 0 }}
      />

      <div className="hidden lg:block absolute w-full h-full bg-black/30" />

      <BannerContent />
    </section>
  );
};

export default HeroBanner;
