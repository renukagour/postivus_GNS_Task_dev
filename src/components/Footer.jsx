/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col px-24 mt-36 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col px-16 pt-14 pb-12 max-w-full bg-zinc-900 rounded-[45px_45px_0px_0px] w-[1241px] max-md:px-5">
        <div className="flex flex-col w-full max-w-[1121px] max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c543dc4610cc45b2959669c437915fe2b8758ab9c27077113727c8ad583e235?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c" className="object-contain shrink-0 self-stretch my-auto aspect-[6.21] w-[180px]" alt="Company logo" />
            <nav className="flex flex-wrap gap-10 items-start self-stretch my-auto text-lg text-white min-w-[240px] max-md:max-w-full">
              <a href="#about-us">About us</a>
              <a href="#services">Services</a>
              <a href="#use-cases">Use Cases</a>
              <a href="#pricing">Pricing</a>
              <a href="#blog">Blog</a>
            </nav>
            <div className="flex gap-5 items-start self-stretch my-auto">
              <a href="#" aria-label="Facebook">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a39a9010fefdee5c418470be4fa557ae1c541a73ebe6d5687ae4eca9551be64?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c" className="object-contain shrink-0 aspect-square w-[30px]" alt="Facebook icon" />
              </a>
              <a href="#" aria-label="Twitter">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f647e6456a2f5aa2b87ac7dbf14361af8a8daed2caa6ed204f8c51f565d1792?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c" className="object-contain shrink-0 aspect-square w-[30px]" alt="Twitter icon" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6af3bf703154640cce69f0f7be92320d1bce3cf13c85e60eb08ec2cd9d71ea3a?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c" className="object-contain shrink-0 aspect-square w-[30px]" alt="LinkedIn icon" />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 items-start mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col min-w-[240px]">
              <div className="flex flex-col self-start text-xl font-medium text-black">
                <div className="px-2 bg-lime-300 rounded-lg">Contact us:</div>
              </div>
              <address className="flex flex-col mt-7 text-lg text-white not-italic">
                <div>Email: info@positivus.com</div>
                <div className="mt-5">Phone: 555-567-8901</div>
                <div className="mt-5">
                  Address: 1234 Main St<br />
                  Moonstone City, Stardust State 12345
                </div>
              </address>
            </div>
            <form className="flex overflow-hidden flex-wrap gap-5 items-start px-10 py-14 rounded-2xl bg-zinc-800 min-w-[240px] max-md:px-5 max-md:max-w-full">
              <input
                type="email"
                placeholder="Email"
                className="overflow-hidden gap-2.5 px-9 py-6 text-lg text-white whitespace-nowrap rounded-2xl border border-white border-solid min-w-[240px] w-[285px] max-md:px-5"
                required
              />
              <button type="submit" className="gap-2.5 px-9 py-5 text-xl leading-snug text-center text-black bg-lime-300 rounded-2xl min-w-[240px] max-md:px-5">
                Subscribe to news
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col mt-12 w-full text-lg leading-loose text-white max-w-[1120px] max-md:mt-10 max-md:max-w-full">
          <hr className="w-full border-t border-white border-solid" />
          <div className="flex flex-wrap gap-10 items-start self-start mt-12 max-md:mt-10 max-md:max-w-full">
            <div>© 2023 Positivus. All Rights Reserved.</div>
            <a href="#privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;