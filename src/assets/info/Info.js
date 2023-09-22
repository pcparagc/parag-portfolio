import { colors } from '../colors/mainGradient';
import congnitio_analytics from '../img/cognitio_analytics.png';
import giggi from '../img/giggi.png';
import hdfc from '../img/hdfc.jpg';
import juno from '../img/juno.png';
import luxecrews from '../img/luxecrews.png';
import motivatemd from '../img/motivatemd.png';
import self from '../img/self.png';

export const info = {
  firstName: 'Parag',
  lastName: 'Chaudhari',
  initials: 'PC',
  position: 'a Full Stack Developer',
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '☕',
      text: 'fueled by coffee and good food',
    },
    {
      emoji: '🌎',
      text: 'based in the US',
    },
    {
      emoji: '💼',
      text: 'Senior Developer',
    },
    {
      emoji: '📧',
      text: 'iamparag.dev@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://www.instagram.com/ultimatious/',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/pcparagc',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/pcparagc/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com/ParaggChaudhari',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
  ],
  bio: "Hi there! I'm Parag, a Computer Science grad student at Cal State LA. I'm a tech enthusiast with a knack for web and mobile app development. When I'm not coding, you'll find me on two wheels, embracing new adventures. Let's collaborate and bring innovative ideas to life!",
  skills: {
    proficientWith: [
      'javascript',
      'typescript',
      'react',
      'react native',
      'jest',
      'html5',
      'css3',
      'ui libraries',
      'storybook',
      'git',
      'github',
      'postgresql',
      'google firebase',
      'jira',
      'vscode',
      'postman',
      'swagger',
      'figma',
      'xcode',
      'android studio',
      'and more...',
    ],
    exposedTo: ['nodejs', 'python', 'adobe cc suite', 'Wordpress', 'Drupal'],
  },
  hobbies: [
    {
      label: 'physical well-being',
      emoji: '🧘🏻‍♂️',
    },
    {
      label: 'travelling',
      emoji: '🚗',
    },
    {
      label: 'team sports',
      emoji: '🏏',
    },
    {
      label: 'cooking',
      emoji: '🌶',
    },
  ],
  portfolio: [
    {
      title: 'Juno Dating',
      live: 'https://www.junodatingapp.com/',
      source: '#',
      description:
        'Designed and implemented the registration flow of the application using React Native.',
      image: juno,
    },
    {
      title: 'HDFC Bank',
      live: 'https://www.hdfcbank.com/personal/ways-to-bank/mobilebanking',
      source: '#',
      description:
        'Constructed a bespoke UI library from the ground up and successfully executed multiple proof of concept (PoC) projects to introduce innovative new features.',
      image: hdfc,
    },
    {
      title: 'LuxeCrews',
      live: 'https://luxecrews.com/',
      source: '#',
      description:
        'An innovative aviation travel app seeks to elevate the passenger and crew experience by delivering tailored solutions, enhancing communication, and streamlining operations to create a more enjoyable and stress-free air travel environment.',
      image: luxecrews,
    },
    {
      title: 'Giggi',
      live: 'https://www.giggi.io/',
      source: '#',
      description:
        'Integrated Google Maps API to optimize location-based job searches with adjustable radius, alongside enhancing the overall screen navigation for a smoother and more efficient user experience.',
      image: giggi,
    },
    {
      title: 'The Premed App (MotivateMD)',
      live: 'https://www.motivatemd.com/',
      source: '#',
      description:
        'Redesigned select webpages, introduced integrated messaging, and improved the UI, resulting in a reduced bounce rate and enhanced user experience for the mobile application.',
      image: motivatemd,
    },
    {
      title: 'Cognitio Analytics',
      live: 'https://sie.cognitioanalytics.com/',
      source: '#',
      description:
        'Led the initial setup phase and played a pivotal role in developing a custom dashboard from scratch using React.js for dynamic user interfaces and Plotly for interactive data visualization, ensuring an intuitive and data-rich user experience.',
      image: congnitio_analytics,
    },
  ],
};
