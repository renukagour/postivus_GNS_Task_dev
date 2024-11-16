/* eslint-disable no-unused-vars */
import React from 'react';

const CTASection = () => {
  return (
    <section className="flex flex-wrap gap-0 items-center px-24 mt-24 w-full text-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-10 items-center self-stretch px-16 my-auto bg-zinc-100 min-h-[347px] min-w-[240px] rounded-[45px] w-[1240px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[500px]">
          <h2 className="text-3xl font-medium max-md:max-w-full">
            Let&apos;s make things happen
          </h2>
          <p className="mt-7 text-lg max-md:max-w-full">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <button className="gap-2.5 self-start px-9 py-5 mt-7 text-xl leading-snug text-center text-white rounded-2xl bg-zinc-900 max-md:px-5">
            Get your free proposal
          </button>
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c65d9a9d96b42f8bb518afd5ab0a70c62fe95aedba8c147ba9a9657da3d3e90?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c" className="object-contain self-stretch my-auto aspect-[1.25] min-w-[240px] w-[494px] max-md:max-w-full" alt="Digital marketing illustration" />
    </section>
  );
};

export default CTASection;