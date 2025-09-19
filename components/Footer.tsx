
import React from 'react';
import { SOCIAL_LINKS, GITHUB_ICON, LINKEDIN_ICON, TWITTER_ICON } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary border-t border-gray-800">
      <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 text-center text-medium">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={'https://github.com/nkssrinivas'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">{GITHUB_ICON}</a>
          <a href={'https://www.linkedin.com/in/krishna-sai-srinivas-nandigam-a03a7a290/'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">{LINKEDIN_ICON}</a>
          {/* <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">{TWITTER_ICON}</a> */}
        </div>
        <p>&copy; {new Date().getFullYear()} srinivas nandigam. All Rights Reserved.</p>
        <p className="text-sm mt-2">Built with love.</p>
      </div>
    </footer>
  );
};

export default Footer;
