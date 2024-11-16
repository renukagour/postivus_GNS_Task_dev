/* eslint-disable no-unused-vars */
import React from 'react';
import ProcessStep from './ProcessStep';

const WorkingProcessSection = () => {
  const steps = [
    { number: "01", title: "Consultation", description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.", bgColor: "bg-lime-300" },
    { number: "02", title: "Research and Strategy Development", description: "", bgColor: "bg-zinc-100" },
    { number: "03", title: "Implementation", description: "", bgColor: "bg-zinc-100" },
    { number: "04", title: "Monitoring and Optimization", description: "", bgColor: "bg-zinc-100" },
    { number: "05", title: "Reporting and Communication", description: "", bgColor: "bg-zinc-100" },
    { number: "06", title: "Continual Improvement", description: "", bgColor: "bg-zinc-100" }
  ];

  return (
    <section className="flex flex-col px-24 mt-20 max-md:px-5 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
      {steps.map((step, index) => (
        <ProcessStep key={index} {...step} />
      ))}
    </section>
  );
};

export default WorkingProcessSection;