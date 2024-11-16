/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Testimonial = ({ content, author, position, bgColor, textColor, quoteImage }) => {
  return (
    <div className="flex flex-col items-end min-w-[240px] w-[606px] max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[606px]">
        <div className={`flex overflow-hidden relative flex-col px-14 pt-12 pb-20 w-full ${bgColor} min-h-[266px] stroke-[1px] stroke-lime-300 max-md:px-5 max-md:max-w-full`}>
          <img loading="lazy" src={quoteImage} className="object-cover absolute inset-0 size-full" alt="" />
          <p className={`relative z-10 ${textColor}`}>{content}</p>
        </div>
      </div>
      <div className="mt-5 max-md:max-w-full">
        <span className="text-xl font-medium leading-7 text-lime-300">{author}</span>
        <br />
        {position}
      </div>
    </div>
  );
};

export default Testimonial;