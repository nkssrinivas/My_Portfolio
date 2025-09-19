
import React, { useState } from 'react';
import Section from './Section';
// import { getFunFact } from '../services/geminiService';

const AboutSection: React.FC = () => {
  const [fact, setFact] = useState<string>('');
  const [isLoadingFact, setIsLoadingFact] = useState<boolean>(false);

  // const handleGetFunFact = async () => {
  //   setIsLoadingFact(true);
  //   setFact('');
  //   const newFact = await getFunFact();
  //   setFact(newFact);
  //   setIsLoadingFact(false);
  // };

  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-2">
          <img 
            src="./profile.jpg" 
            alt="Profile portrait" 
            className="rounded-full mx-auto md:mx-0 w-64 h-64 md:w-full md:h-auto object-cover border-4 border-secondary shadow-lg"
          />
        </div>
        <div className="md:col-span-3 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">Hello, I'm Krishna Sai Srinivas Nandigam.</h3>
          <p className="text-light mb-4 leading-relaxed">
            A computer science engineer with strong skills in software development, system optimization, and full-stack development. I work with Python, C, Java, and modern web technologies. I have experience building high-performance solutions and improving database efficiency. I enjoy working in agile teams, solving challenging problems, and continuously learning both technical and soft skills.
          </p>
          {/* <div className="mt-6">
            <button onClick={handleGetFunFact} disabled={isLoadingFact} className="bg-accent text-primary font-bold py-2 px-6 rounded-lg hover:bg-blue-400 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed">
              {isLoadingFact ? 'Thinking...' : 'Tell me a fun fact!'}
            </button>
            {fact && (
                <div className="mt-4 p-4 bg-secondary rounded-lg shadow-inner">
                    <p className="text-light text-sm italic">{fact}</p>
                </div>
            )}
            {isLoadingFact && (
                <div className="mt-4 p-4 text-center">
                    <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-accent"></div>
                </div>
            )}
          </div> */}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
