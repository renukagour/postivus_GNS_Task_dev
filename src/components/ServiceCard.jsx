/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ServiceCard = ({ title, icon, bgColor, textColor, buttonIcon }) => {
  return (
    <div className={`flex overflow-hidden flex-wrap gap-10 justify-between items-center p-12 border border-solid shadow-sm ${bgColor} border-zinc-900 min-w-[240px] rounded-[45px] w-[600px] max-md:px-5 max-md:max-w-full`}>
      <div className="flex flex-col justify-center self-stretch my-auto">
        <div className={`flex flex-col text-3xl font-medium ${textColor}`}>
          {title.split(' ').map((word, index) => (
            <div key={index} className="px-2 bg-lime-300 rounded-lg">
              {word}
            </div>
          ))}
        </div>
        <div className={`flex gap-4 items-center self-start mt-24 text-xl leading-snug ${textColor} max-md:mt-10`}>
          <img loading="lazy" src={buttonIcon} className="object-contain shrink-0 self-stretch my-auto aspect-square w-[41px]" alt="" />
          <div className="self-stretch my-auto">Learn more</div>
        </div>
      </div>
      <div className="flex flex-col justify-center self-stretch py-0.5 my-auto w-[210px]">
        <img loading="lazy" src={icon} className="object-contain aspect-[1.27] w-[210px]" alt={`${title} icon`} />
      </div>
    </div>
  );
};

export default ServiceCard;