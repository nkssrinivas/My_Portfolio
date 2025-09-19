
import React from 'react';
import type { Project, Experience } from './types';

export const GITHUB_ICON = (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current">
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export const LINKEDIN_ICON = (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current">
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 0 1 2.063-2.065 2.064 2.064 0 0 1 2.063 2.065c0 1.14-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);

export const TWITTER_ICON = (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current">
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 7.184L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298z"/>
  </svg>
);

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Movie Ticket Booking System',
    description: `Developed a movie ticket booking system using JavaScript and CSS. This web-based
application simulates the process of selecting a movie, choosing a showtime, and booking tickets, giving users a real-time,
responsive experience.`,
    tags: ['JavaScript', 'CSS',],
    imageUrl: './cineplex.jpg',
    // repoUrl: 'https://github.com',
    liveUrl: 'https://movie-ticket-booking-system-coral.vercel.app/',
  },
  {
    title: 'Personal Portfolio',
    description: `Created a modular single-page application (SPA) in React.js to showcase professional
background, technical skills, and achievements, featuring a clean layout, interactive elements, and a maintainable code
structure.`,
    tags: ['React', 'TypeScript'],
    imageUrl: './portfolio.jpeg',
    liveUrl: 'https://movie-ticket-booking-system-coral.vercel.app/',
  },
  {
    title: 'car-price-prediction',
    description: 'Developed a machine learning model for predicting the car price',
    tags: ['Machine Learning'],
    imageUrl: './car.jpg',
    repoUrl: 'https://github.com/nkssrinivas/car-price-prediction',
  },
  //  {
  //   title: 'Collaborative Whiteboard App',
  //   description: 'A real-time collaborative whiteboard application allowing multiple users to draw and brainstorm together.',
  //   tags: ['React', 'Canvas API', 'Firebase', 'Tailwind CSS'],
  //   imageUrl: 'https://picsum.photos/seed/project4/600/400',
  //   liveUrl: '#',
  // },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'AI Intern ',
    company: 'Infosys Springboard',
    period: 'Sep 2025 - Present',
    description: [
      `Developing a Convolutional Neural Network (CNN) for iris tumor detection,
currently achieving 90% accuracy on a dataset of 2,000+ medical images.`,
      `Processed and augmented 3,000+ images; trained and evaluated the
model on an 80-20 split, improving classification accuracy by 10%.`,
     
    ],
  },
  
  {
    role: 'Software Engineer',
    company: 'Digital Creations',
    period: '2015 - 2018',
    description: [
      `Implemented AI-driven solutions using large datasets to solve real-world ML challenges with
scalable, efficient predictions.`,
      `Enhanced e-waste sorting by 30% and classification accuracy by 25% through automated
image processing and classification techniques.`,
     
    ],
  },
];

export const SOCIAL_LINKS = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "your.email@example.com"
};
