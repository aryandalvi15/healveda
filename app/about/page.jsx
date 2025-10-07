"use client";

import React, { useState } from 'react';
import Cards from '@/components/Cards';
import GradientText from '@/components/GradientText';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const teamMembers = [
    {
      name: "Aryan Dalvi",
      role: "Frontend Developer",
      description: "Passionate about crafting responsive and immersive user interfaces using React and modern web technologies."
    },
    {
      name: "Prabhanjan Khot",
      role: "Backend Developer",
      description: "Focused on building secure, scalable, and efficient backend systems with strong API, database and machine learning integration skills."
    },
    {
      name: "Pranav Sawant",
      role: "Development Person",
      description: "Ensures smooth project flow by managing development cycles and integrating frontend and backend components seamlessly."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen w-screen font-bold bg-black overflow-hidden flex flex-col items-center justify-center">
      
      {/* Heading */}
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={4.78}
        showBorder={false}
        className="inline-block text-6xl md:text-8xl text-center px-6"
      >
        ABOUT
      </GradientText>

      <div className="flex flex-col gap-y-16 w-screen px-6 md:px-20 lg:px-56 text-2xl md:text-3xl mt-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            onClick={() => toggleAccordion(index)}
            className="cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          >
            <Cards
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="flex flex-col items-center">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={5}
                  showBorder={false}
                  className="inline-block text-3xl md:text-5xl text-center"
                >
                  {member.name}
                </GradientText>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeIndex === index
                      ? 'max-h-60 mt-6 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-green-400 text-xl md:text-2xl text-center mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-lg md:text-xl text-center font-normal px-4">
                    {member.description}
                  </p>
                </div>
              </div>
            </Cards>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
