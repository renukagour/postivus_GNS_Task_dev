/* eslint-disable no-unused-vars */
import React from 'react';

const ContactForm = () => {
  return (
    <section className="flex gap-0 items-center pl-24 mt-20 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-2.5 items-start self-stretch px-24 pt-16 pb-20 my-auto bg-zinc-100 min-w-[240px] rounded-[45px] w-[1240px] max-md:px-5 max-md:max-w-full">
        <form className="flex flex-col min-w-[240px] w-[556px]">
          <div className="flex gap-9 items-start self-start">
            <label className="flex gap-3.5 items-start w-24 rounded-none">
              <div className="flex flex-col justify-center items-center self-start px-1.5 bg-white border border-black border-solid h-[30px] rounded-[29px] w-[30px]">
                <div className="flex shrink-0 w-4 h-4 bg-lime-300 rounded-full" />
              </div>
              <span className="my-auto text-lg text-black">Say Hi</span>
            </label>
            <label className="flex gap-3.5 items-start text-lg text-black rounded-[29px] w-[145px]">
              <div className="flex shrink-0 self-start bg-white border border-black border-solid h-[30px] rounded-[29px] w-[30px]" />
              <span className="my-auto basis-auto">Get a Quote</span>
            </label>
          </div>
          <div className="flex flex-col mt-10 w-full whitespace-nowrap">
            <div className="flex flex-col w-full max-w-[556px] max-md:max-w-full">
              <label htmlFor="name" className="text-base leading-7 text-black">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="overflow-hidden gap-2.5 px-8 py-5 mt-1.5 w-full text-lg bg-white rounded-2xl border border-black border-solid text-zinc-500 max-md:px-5"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col mt-6 w-full max-w-[556px] max-md:max-w-full">
              <label htmlFor="email" className="text-base leading-7 text-black">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="overflow-hidden gap-2.5 px-8 py-5 mt-1.5 w-full text-lg bg-white rounded-2xl border border-black border-solid text-zinc-500 max-md:px-5"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col mt-6 w-full max-w-[556px] min-h-[223px] max-md:max-w-full">
              <label htmlFor="message" className="text-base leading-7 text-black">Message*</label>
              <textarea
                id="message"
                name="message"
                required
                className="overflow-hidden gap-2.5 px-8 pt-5 pb-36 mt-1.5 w-full text-lg bg-white rounded-2xl border border-black border-solid min-h-[190px] text-zinc-500 max-md:px-5 max-md:pb-24"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="gap-2.5 self-stretch px-9 py-5 mt-10 w-full text-xl leading-snug text-center text-white rounded-2xl bg-zinc-900 max-md:px-5">
            Send Message
          </button>
        </form>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/96972f20f8073e7e42c37d9c6aa8d0f9ea36a4f8c42558960b58fd227e4731cc?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c" className="object-contain self-stretch my-auto rounded-none aspect-[0.72] min-w-[240px] w-[692px] max-md:max-w-full" alt="Contact illustration" />
    </section>
  );
};

export default ContactForm;