
import React from 'react';
import { SOCIAL_LINKS, GITHUB_ICON, LINKEDIN_ICON, TWITTER_ICON } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary border-t border-gray-800">
      <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 text-center text-medium">
        
        <p>&copy; {new Date().getFullYear()} srinivas nandigam. All Rights Reserved.</p>
        <p className="text-sm mt-2">Built with love.</p>
      </div>
    </footer>
  );
};

export default Footer;
