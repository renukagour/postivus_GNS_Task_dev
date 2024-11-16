/* eslint-disable no-unused-vars */
import React from 'react';
import TeamMember from './TeamMember';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO and Founder",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c05487d57246706d0f16e0d005e7d8d465850eb38150fb465311af3da37d1395?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c",
      description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
    },
    {
      name: "Jane Doe",
      role: "Director of Operations",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bada1bb75d99a8d673781d10f6ad8301cafe193e825a7a6d66892f13ce3ae03?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c",
      description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
    },
    {
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ec8f88b40e1f3ae524270f44c1a0237fade36813693863eb524fa2e859c30cc?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c",
      description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
    },
    {
      name: "Emily Johnson",
      role: "PPC Manager",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac219348f2e3709e6b62191dafe314ded50f8684a1c5c8472cacd5b5772e28e3?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c",
      description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
    },
    {
      name: "Brian Williams",
      role: "Social Media Specialist",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/95d49a3054464d4ef6269e78e001a59e5d28b0d22134ab678d2934741dfc2950?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c",
      description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
    },
    {
      name: "Sarah Kim",
      role: "Content Creator",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd15c28ab289033da4570ad133f725062ce2057b61955b29a5744030ab641ea5?placeholderIfAbsent=true&apiKey=e839b257f464488b9a4adeb22b8a6b1c",
      description: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries"
    }
  ];

  return (
    <section className="mt-20 text-black max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start px-24 max-md:px-5 max-md:max-w-full">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      <button className="gap-2.5 self-end px-9 py-5 mt-10 mr-24 text-xl leading-snug text-center text-white rounded-2xl bg-zinc-900 max-md:px-5 max-md:mr-2.5">
        See all team
      </button>
    </section>
  );
};

export default TeamSection;