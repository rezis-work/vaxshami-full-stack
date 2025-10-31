import React from "react";
import { Button } from "@/components/ui/button";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactFormIntro() {

  return (
    <section className="w-full flex flex-col items-center space-y-7 md:space-y-9 py-4">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center bg-gradient-to-r from-[#6d62ff] via-[#4095f3] to-[#521d91] text-transparent bg-clip-text drop-shadow animate-fade-in">
        Your Voice at Vaxshami!
      </h1>
      <div className="h-1 w-20 md:w-32 mt-2 rounded-full bg-gradient-to-r from-[#6d62ff] to-[#4095f3] animate-[grow_0.8s_ease-in]" />
      <p className="text-lg text-center md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl animate-fade-in [animation-delay:0.1s]">
        Vaxshami is a place for everyone passionate about flavor, story, and inspiration! Your voice matters: share your story, taste, idea, or question with our community. Let's discover new stories together and give a voice to the world of taste and food culture.
      </p>
      <Button className="inline-flex items-center gap-3 px-8 py-6 text-lg font-bold rounded-full bg-gradient-to-br from-[#6d62ff] via-[#4095f3] to-[#521d91] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
        <FaPaperPlane className="text-xl" />
        Share your story
      </Button>
    </section>
  );
}
