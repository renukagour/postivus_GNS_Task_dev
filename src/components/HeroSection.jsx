/* eslint-disable no-unused-vars */
import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex overflow-hidden flex-wrap gap-10 justify-between items-start px-24 mt-16 max-w-full text-xl w-[1440px] max-md:px-5 max-md:mt-10">
      <div className="flex flex-col min-w-[240px] w-[531px] max-md:max-w-full">
        <h1 className="text-6xl font-medium text-black max-md:max-w-full max-md:text-4xl">
          Navigating the digital landscape for success
        </h1>
        <p className="mt-9 leading-7 text-black max-md:max-w-full">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <button className="gap-2.5 self-start px-9 py-5 mt-9 leading-snug text-center text-white rounded-2xl bg-zinc-900 max-md:px-5">
          Book a consultation
        </button>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ade88ea84eddbb72d791679fb190c9e7df0fca43b1ebe7a0f5c3e11bac338624?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c" className="object-contain aspect-[1.17] min-w-[240px] w-[600px] max-md:max-w-full" alt="Digital marketing illustration" />
    </section>
  );
};

export default HeroSection;