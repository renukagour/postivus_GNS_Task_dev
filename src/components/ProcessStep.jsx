/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
// Continuing from where we left off:

const ProcessStep = ({ number, title, description, bgColor }) => {
  return (
    <div className={`flex overflow-hidden flex-col py-10 pr-14 pl-16 mt-8 w-full font-medium text-black border border-solid shadow-sm ${bgColor} border-zinc-900 max-w-[1234px] rounded-[45px] max-md:px-5 max-md:max-w-full`}>
      <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center w-full max-w-[1117px] max-md:max-w-full">
        <div className="flex flex-wrap gap-6 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
          <div className="self-stretch my-auto text-6xl max-md:text-4xl">{number}</div>
          <div className="self-stretch my-auto text-3xl w-[612px] max-md:max-w-full">{title}</div>
        </div>
        {bgColor === "bg-lime-300" ? (
          <div className="flex flex-col self-stretch my-auto w-[58px]">
            <div className="flex flex-col justify-center items-center px-1.5 rounded-full border border-solid bg-zinc-100 border-zinc-900 h-[58px] stroke-[1px] stroke-zinc-900 w-[58px]">
              <div className="flex shrink-0 bg-black h-[5px] w-[18px]" />
            </div>
          </div>
        ) : (
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3050a32cb4638312b40920cbd53b4982d1e67513215b6202ecc13cb5b4726973?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[58px]" alt="" />
        )}
      </div>
      {description && (
        <>
          <div className="mt-8 w-full min-h-0 border border-black border-solid" />
          <div className="mt-8 text-lg text-black max-md:max-w-full">{description}</div>
        </>
      )}
    </div>
  );
};

export default ProcessStep;