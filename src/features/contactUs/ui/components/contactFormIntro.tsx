import React from "react";
import Image from "next/image";

export default function ContactFormIntro() {

  return (
    <section className="w-full flex flex-col items-center space-y-7 md:space-y-9 py-4">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center bg-gradient-to-r from-green-500 via-blue-400 to-cyan-500 text-transparent bg-clip-text drop-shadow animate-fade-in">
        Your Voice at Vaxshami!
      </h1>
      <div className="h-1 w-20 md:w-32 mt-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 animate-[grow_0.8s_ease-in]" />
      <p className="text-lg text-center md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl animate-fade-in [animation-delay:0.1s]">
        Vaxshami is a place for everyone passionate about flavor, story, and inspiration! Your voice matters: share your story, taste, idea, or question with our community. Let’s discover new stories together and give a voice to the world of taste and food culture.
      </p>
      <div
        className="inline-flex items-center gap-2 mt-2 px-7 py-3 text-lg font-bold rounded-full bg-gradient-to-br from-green-500 via-blue-400 to-cyan-400 text-white shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 animate-fade-in [animation-delay:0.2s]"
      >
        Share your story
      </div>
    </section>
  );
}
