/* eslint-disable no-unused-vars */
import React from 'react';
import Testimonial from './Testimonial';

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp",
      bgColor: "bg-zinc-900",
      textColor: "text-white",
      quoteImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/1713bfb2a88645eadd96a70b4a9495c0056414ef4b85b8a3790232ef17e59481?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c"
    },
    {
      content: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp",
      bgColor: "bg-zinc-900",
      textColor: "text-white",
      quoteImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/f70b6c10ea949b692b8a6310fdff7b57cc82337257e4c13eb793e6500e7e7997?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c"
    },
    {
      content: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp",
      bgColor: "bg-zinc-900",
      textColor: "text-white",
      quoteImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/81a933b350f7f349924712131f1f328b2b4833eccb32e05be8baaad5a999c5c8?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c"
    }
  ];

  return (
    <section className="flex overflow-hidden flex-col justify-center self-center py-20 mt-20 w-full bg-zinc-900 max-w-[1240px] rounded-[45px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center w-full max-md:max-w-full">
        <div className="flex gap-10 justify-between items-start w-full text-lg text-white">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        <div className="flex flex-wrap gap-10 justify-between items-center mt-32 max-w-full w-[564px] max-md:mt-10">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a31ce305aacbac158f3d01afae344ebcf6e8e03007c62e8e9e5cd4f6824064b7?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c" className="object-contain shrink-0 self-stretch my-auto w-5" alt="Previous testimonial" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0359f43c70590ea7e66398b3e63b2b7a8018e757ca0400de8fa719168cc64b9?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c" className="object-contain shrink-0 self-stretch my-auto aspect-[10.42] w-[146px]" alt="Testimonial navigation" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/351921526387608d70ae0d5593ca042c9741ad9edfb733b91d12903ca7d928d7?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c" className="object-contain shrink-0 self-stretch my-auto w-5" alt="Next testimonial" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;