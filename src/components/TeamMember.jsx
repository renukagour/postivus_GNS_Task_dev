/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const TeamMember = ({ name, role, image, description }) => {
  return (
    <div className="flex overflow-hidden flex-col px-9 pt-10 pb-16 bg-white border border-solid border-zinc-900 min-h-[331px] min-w-[240px] rounded-[45px] shadow-[0px_5px_0px_rgba(25,26,35,1)] w-[387px] max-md:px-5">
      <div className="flex flex-col w-full max-w-[317px]">
        <div className="flex gap-0 items-start w-full">
          <div className="flex flex-1 shrink gap-5 items-end pr-11 basis-0 min-w-[240px]">
            <img loading="lazy" src={image} className="object-contain shrink-0 aspect-[1.03] w-[106px]" alt={`${name} profile`} />
            <div className="flex flex-col rounded-none w-[148px]">
              <div className="self-start text-xl font-medium">{name}</div>
              <div className="text-lg">{role}</div>
            </div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8c48e4ff4fd0a07d33d24d9205ab14100902ec38f810b5d7ffb5d11fabe1655?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c" className="object-contain shrink-0 aspect-square w-[34px]" alt="" />
        </div>
        <div className="mt-7 w-full border border-black border-solid min-h-[1px]" />
        <div className="mt-7 text-lg">{description}</div>
      </div>
    </div>
  );
};

export default TeamMember;