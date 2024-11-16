import React from 'react';

const CaseStudiesSection = () => {
  const caseStudies = [
    "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
  ];

  return (
    <section className="flex flex-col px-24 mt-20 max-md:px-5 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start px-16 py-16 bg-zinc-900 rounded-[45px] max-md:px-5 max-md:max-w-full">
        {caseStudies.map((study, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col min-w-[240px] w-[286px]">
              <p className="text-lg text-white">{study}</p>
              <div className="flex gap-4 items-center self-start mt-5 text-xl leading-snug text-lime-300">
                <div className="self-stretch my-auto">Learn more</div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c12a60c027beb167fb8e7a545e3890694b83d0c2bd1bd9f9745f7c5ec125ef3?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c" className="object-contain shrink-0 self-stretch my-auto aspect-[1.7] w-[17px]" alt="" />
              </div>
            </div>
            {index < caseStudies.length - 1 && (
              <div className="shrink-0 w-0 border border-white border-solid h-[186px]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesSection;