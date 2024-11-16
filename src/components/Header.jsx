/* eslint-disable no-unused-vars */
import React from 'react';
import Navigation from './Navigation';


const Header = () => {
  return (
    <header className="flex flex-col pt-16 bg-white">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-24 w-full max-w-[1440px] max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden gap-2.5 items-start self-stretch py-2.5 my-auto w-[220px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1c29452d029a52470e937b77b7b62f62112b24aabbce523b3e3b41de9862fab?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c" className="object-contain aspect-[6.1] w-[220px]" alt="Company logo" />
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;