import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "JAVA DSA",
    icon: backend,
  },
  {
    title: "Artificial Intelligence and Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    // company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2023 - August 2023",
    points: [
      "Learning and building web applications using React.js and modern frontend technologies.",
      "Collaborating with mentors and team members to understand best practices in development.",
      "Implementing responsive design and ensuring smooth user experience across devices.",
      "Continuously improving skills through code reviews and feedback from senior developers.",
    ],
  },
  {
    title: "React Native Developer",
    // company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - March 2024",
    points: [
      "Learning and building mobile applications using React Native for cross-platform development.",
      "Collaborating with mentors and team members to understand UI/UX design principles and app architecture.",
      "Implementing responsive layouts to ensure seamless performance across Android and iOS devices.",
      "Continuously improving skills by participating in code reviews and applying feedback from experienced developers.",
    ],
  },
  {
    title: "Web Developer",
    // company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2024 - May 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with mentors and team members to understand best practices in web development.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Continuously improving coding skills by participating in code reviews and applying feedback from senior developers.",
    ],
  },
  {
    title: "Full stack Developer",
    // company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "October - December 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with mentors and team members to understand frontend and backend development workflows.  ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Yash is a highly motivated developer with a great passion for learning. Their ability to adapt to new technologies and solve problems creatively is truly impressive.",
    name: "Neha Patel",
    designation: "SE",
    company: "DevSolutions",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQFpuJTG-HO_Qg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1597937632488?e=2147483647&v=beta&t=aNE2-mIQJQ7pWXz0wS_nngKWJfBo1GOqN41DK4ATigU",
  },
  {
    testimonial:
      "Collaborating with You on our project was a fantastic experience. Their dedication, coding skills, and problem-solving approach made a huge impact on the final product.",
    name: "Ankit Mehra",
    designation: "Founder",
    company: "DigitalNest",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQGWOt1JthJ54g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517681162055?e=2147483647&v=beta&t=xfzNbjK8uTMxeoTFbv7YmDpCeaePoZY2i-NK7Enpqh0",
  },
  {
    testimonial:
      "I needed a website for my business, and You delivered beyond my expectations. The design was clean, the performance was fast, and the communication was smooth throughout.",
    name: "Amit Verma",
    designation: "SD",
    company: "CodeCrafters",
    image: "https://media.licdn.com/dms/image/v2/D5603AQE65orW_6tMbg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723869298328?e=2147483647&v=beta&t=AsYmc8XndN4ucZGxGqzrk-Vbf1iRitDLTc45JX8YtKQ",
  },
];

const projects = [
  {
    name: "Finance Tracker",
    description:
      "A personal finance tracking web application that helps users manage income, expenses, taxes, assets, debt, and net worth with real-time insights.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/yashch3101/Personal-Finance-Visualizer",
  },
  {
    name: "News App",
    description:
      "A React Native News App that fetches real-time news from NewsData.io, featuring category filtering, search, bookmarking, and a user-friendly interface.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "newsapi",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/yashch3101",
  },
  {
    name: "Glowii AI",
    description:
      "AI-powered beauty service recommendation system that analyzes user inputs like skin concerns, event type, and treatment area to suggest personalized services and combos.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/yashch3101/GlowiiAI-",
  },
];

export { services, technologies, experiences, testimonials, projects };
