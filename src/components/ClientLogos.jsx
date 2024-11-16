/* eslint-disable no-unused-vars */
import React from 'react';

const ClientLogos = () => {
  const logos = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d8dd1bce87232a5afafc93754386de48a4429afb80138ac5698a8fc2b3ac4537?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c", alt: "Client logo 1", width: "124px", aspect: "2.58" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/55c8d6c9219f4cf6f20d72ea40e913967410e6e0c259ed102b2cebbb80bfccd9?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c", alt: "Client logo 2", width: "126px", aspect: "2.62" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9b660f22a40186a74a6f89f48e0ac9379268bfdc239d4911e9543ef49926962c?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c", alt: "Client logo 3", width: "129px", aspect: "2.69" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ae2452042777d91b784fddcea969418d5c09dbaedd3b4c6b793d6fc3d06873d?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c", alt: "Client logo 4", width: "145px", aspect: "3.02" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e7140bfee264cfddad45e2d9738f9b5d88d7d242b8932bfd5500ace29d4218d?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c", alt: "Client logo 5", width: "126px", aspect: "2.62" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/54a69e3c6b4d69ad4cc9cbe93cd97bda35cb281c8d82aa417fb5cd05bc5bf139?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c", alt: "Client logo 6", width: "111px", aspect: "2.31" }
  ];

  return (
    <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-start px-24 mt-16 max-w-full w-[1440px] max-md:px-5 max-md:mt-10">
      {logos.map((logo, index) => (
        <img
          key={index}
          loading="lazy"
          src={logo.src}
          className={`object-contain shrink-0 bg-blend-luminosity aspect-[${logo.aspect}] w-[${logo.width}]`}
          alt={logo.alt}
        />
      ))}
    </div>
  );
};

export default ClientLogos;