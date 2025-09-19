import React from 'react';
import Section from './Section';
import { EXPERIENCE_DATA } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="relative">
        {/* Timeline vertical line (desktop only) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-secondary hidden md:block"></div>

        {EXPERIENCE_DATA.map((exp, index) => (
          <div
            key={index}
            className="mb-12 flex justify-between items-start w-full flex-col md:flex-row"
          >
            {/* Left side - Role, Company, Period */}
            <div className="md:w-5/12 w-full text-center md:text-right mb-4 md:mb-0 px-4">
              <h3 className="text-xl font-bold text-light">{exp.role}</h3>
              <p className="text-accent font-semibold">{exp.company}</p>
              <p className="text-medium text-sm">{exp.period}</p>
            </div>

            {/* Timeline Dot (center) */}
            <div className="z-10 hidden md:flex items-center justify-center w-1/12">
              <div className="w-4 h-4 rounded-full bg-accent shadow-md"></div>
            </div>

            {/* Right side - Description */}
            <div className="md:w-5/12 w-full px-4">
              <div className="bg-secondary p-6 rounded-lg shadow-lg text-left">
                <ul className="list-disc list-inside text-light space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-sm">{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
