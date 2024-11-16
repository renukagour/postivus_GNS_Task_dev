/* eslint-disable no-unused-vars */
import React from 'react';

const Navigation = () => {
  const navItems = ['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'];

  return (
    <nav className="flex flex-wrap gap-10 justify-center items-center self-stretch my-auto text-xl leading-snug text-black min-w-[240px] max-md:max-w-full">
      {navItems.map((item, index) => (
        <a key={index} href={`#${item.toLowerCase().replace(' ', '-')}`} className="self-stretch my-auto">
          {item}
        </a>
      ))}
      <button className="gap-2.5 self-stretch px-9 py-5 my-auto text-center rounded-2xl border border-solid border-zinc-900 max-md:px-5">
        Request a quote
      </button>
    </nav>
  );
};

export default Navigation;