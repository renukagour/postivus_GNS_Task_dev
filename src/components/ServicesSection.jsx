/* eslint-disable no-unused-vars */
import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: "Search engine optimization",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/42afe00f33a56628dc7d7b0fdba2a3fecbf0de93ce48ed558131e659c0aaaeb4?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c",
      bgColor: "bg-zinc-100",
      textColor: "text-black",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a785fa8878a33eba9f5ab56de436ef13bee30cf99d50b23a7ccf3cac0bb473ee?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c"
    },
    {
      title: "Pay-per-click advertising",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a60e1c5d562dddb8fe4844717f99a2f48707fdcc3fc03d356741220cfd046279?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c",
      bgColor: "bg-lime-300",
      textColor: "text-black",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d5b3644c1bd4efe45911f1b599a8f76e573aaa9233e460880f2949195c1e4dd?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c"
    },
    {
      title: "Social Media Marketing",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e21cc19a8d2ea59bca3688933f353e5dc20b61af058c4448da1c56b5e66d778?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c",
      bgColor: "bg-zinc-900",
      textColor: "text-white",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c9d92aa74a65815aee1bef821f254bab48cc4436cc7f028a9f79da46ebe2295?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c"
    },
    {
      title: "Email Marketing",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/266cb3dc138beb39f93bc9a4f81ba55904322fd82da5637c47dd2e8d74313ecb?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c",
      bgColor: "bg-zinc-100",
      textColor: "text-black",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d5b3644c1bd4efe45911f1b599a8f76e573aaa9233e460880f2949195c1e4dd?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c"
    },
    {
      title: "Content Creation",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/67406aa83a6fbcf3d55b2e7aaff7dacc6b0489ecf6dca471ee8379b8eba4d15e?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c",
      bgColor: "bg-lime-300",
      textColor: "text-black",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a785fa8878a33eba9f5ab56de436ef13bee30cf99d50b23a7ccf3cac0bb473ee?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c"
    },
    {
      title: "Analytics and Tracking",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/162228820ac9cd6c767106e0fb33af701cc0230eab3ee3c4e5bb5264f1f6c00a?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c",
      bgColor: "bg-zinc-900",
      textColor: "text-white",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffa2410a5516a67427a0b9d9151e5636d7f6ff89730594f7d4c38217f858bd37?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c"
    }
  ];

  return (
    <section className="mt-20 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start px-24 max-md:px-5 max-md:max-w-full">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <button className="gap-2.5 self-end px-9 py-5 mt-10 mr-24 text-xl leading-snug text-center text-white rounded-2xl bg-zinc-900 max-md:px-5 max-md:mr-2.5">
        See all services
      </button>
    </section>
  );
};

export default ServicesSection;