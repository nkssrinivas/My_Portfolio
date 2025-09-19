
import React from 'react';
import Section from './Section';
import { SOCIAL_LINKS, GITHUB_ICON, LINKEDIN_ICON, TWITTER_ICON } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-light mb-8 leading-relaxed">
          I'm currently open to new opportunities and collaborations. If you have a project in mind, a question, or just want to say hello, feel free to reach out. Let's build something amazing together!
        </p>
        <a 
          href={`mailto:${'nkssrinivas29047@gmail.com'}`}
          className="inline-block bg-accent text-primary font-bold text-lg py-3 px-8 rounded-lg hover:bg-blue-400 transition-all duration-300 shadow-lg"
        >
          Say Hello
        </a>
        <div className="mt-12 flex justify-center space-x-8">
          <a href={'https://github.com/nkssrinivas'} target="_blank" rel="noopener noreferrer" className="text-medium hover:text-accent transition-colors duration-300 transform hover:scale-110">
            {GITHUB_ICON}
          </a>
          <a href={'https://www.linkedin.com/in/krishna-sai-srinivas-nandigam-a03a7a290/'} target="_blank" rel="noopener noreferrer" className="text-medium hover:text-accent transition-colors duration-300 transform hover:scale-110">
            {LINKEDIN_ICON}
          </a>
          {/* <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-medium hover:text-accent transition-colors duration-300 transform hover:scale-110">
            {TWITTER_ICON}
          </a> */}
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
