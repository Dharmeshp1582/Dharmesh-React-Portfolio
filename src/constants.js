// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import reduxLogo from './assets/tech_logo/redux.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import grownImg from "./assets/company_logo/grownImg.jpg"
import ibmLogo from "./assets/company_logo/IBM.jpg"

// Education Section Logo's
import collegeImg from "./assets/education_logo/gecm.jpg"
import schoolImg from './assets/education_logo/school.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import blog from "./assets/work_logo/blog.png"
import codereview from "./assets/work_logo/codereview.png"
import realEstate from "./assets/work_logo/realEstate.png"
import mymechanic from "./assets/work_logo/mymechanic.png"
import pokemon from "./assets/work_logo/pokemon.png"
import shoes from "./assets/work_logo/shoes.png"

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
     
      { name: 'Redux', logo: reduxLogo },
     
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
   
      { name: 'MongoDB', logo: mongodbLogo },
    
    ],
  },
  {
    title: 'Languages',
    skills: [
    
      { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo }
    ],
  },
];


export const experiences = [
  {
    id: 1,
    role: "MERN Stack Intern",
    company: "Grownited Private Limited",
    date: "Jan 2025 - Apr 2025",
    desc: "Worked on a real-world project titled MyMechanic — a garage booking platform. Developed full-stack features using the MERN stack, implemented role-based dashboards, optimized REST APIs, and enhanced both frontend and backend components for better performance and user experience.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Auth",
      "Tailwind CSS"
    ],
    img: grownImg,
  },
  {
    id: 2,
    role: "AI Intern",
    company: "IBM CSRBOX",
    date: "Jun 2024 - Jul 2024",
    desc: "Contributed to AI-driven solutions during a virtual internship. Worked on machine learning models, natural language processing tasks, and basic model evaluation. Gained foundational experience in working with AI pipelines and integrating AI with full-stack web apps.",
    skills: [
      "Machine Learning",
      "Data Analysis",
      "AI Concepts",
      "Team Collaboration"
    ],
    img: ibmLogo,
  },
];

         

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering (Information Technology)",
    school: "Government Engineering College, Modasa",
    date: "September 2021 - May 2025",
    grade: "8.24 CGPA",
    desc: "Completed a 4-year undergraduate program in Information Technology. Gained strong skills in web development, database systems, and full-stack engineering. Worked on major projects like MyMechanic and AI Blog Generator using the MERN stack.",
     img: collegeImg,
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC – Science, PCM)",
    school: "Shree C.G. Mehta Vidhyamandir, Umedgadh, Idar",
    date: "June 2019 - May 2021",
    grade: "76.5%",
    desc: "Studied Physics, Chemistry, and Mathematics in the Science stream. Developed a solid foundation in analytical thinking and logical problem-solving, which later supported my engineering coursework and programming logic.",
    img: schoolImg,
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    school: "Shree C.G. Mehta Vidhyamandir, Umedgadh, Idar",
    date: "June 2018 - May 2019",
    grade: "77%",
    desc: "Built foundational knowledge in core academic subjects including mathematics, science, and English. Developed early interest in technology and engineering.",
    img: schoolImg,
  },
];


  
  export const projects = [
     {
    id: 0,
    title: "GitHub Profile Detective Helper",
    description:
      "A React.js application that retrieves detailed GitHub profile data including repositories, contributions, and follower stats via GitHub's public API. This project showcases front-end API integration, state management, and responsive UI — aligning with skills demonstrated during my UI Development internship and MERN stack training.",
    image: githubdetLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dharmeshp1582/Github_profile_detective",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "AI Powered Blog App",
    description:
      "A MERN stack blogging platform powered by AI to generate, edit, and publish blog content. Designed with a clean UI, it allows users to log in, manage posts, and view a personalized feed of AI-written blogs.",
    image: blog,
    tags: ["MERN Stack", "AI", "Blogging", "Vercel"],
     github: "https://github.com/Dharmeshp1582/quickblog-with-ai",
    webapp: "https://quickblogfrontend-68daakl40-dharmesh-patels-projects-63c7f48d.vercel.app/",
  },
  {
    id: 2,
    title: "AI Powered Code Reviewer",
    description:
      "A full-stack code reviewing web application using OpenAI APIs. This tool reviews code snippets, offers suggestions, and highlights errors using natural language understanding and syntax rules.",
    image: codereview,
    tags: ["MERN Stack", "AI", "Code Analysis", "OpenAI"],
    github: "https://github.com/Dharmeshp1582/mern-ai-code-reviewer",
    webapp: "https://mern-ai-code-reviewer-three.vercel.app/",
  },
  {
    id: 3,
    title: "Real Estate Profile Website",
    description:
      "A clean and responsive ReactJS-based portfolio site for a real estate agent to showcase listings, services, and contact information.",
    image: realEstate,
    tags: ["React JS", "Responsive UI"],
    github:"https://github.com/Dharmeshp1582/React_Real_estate",
    webapp: "https://react-real-estate-kappa.vercel.app/",
  },
  {
    id: 4,
    title: "MyMechanic - Garage Booking Platform",
    description:
      "A complete MERN stack solution for booking vehicle services. Supports user registration, garage listings, admin approval, appointment booking, payment integration, and real-time status updates for garages, users, and admins.",
    image: "images/portfolio/mern.jpg",
    tags: ["React JS", "Node.js", "MongoDB", "Express", "JWT", "Stripe"],
    image: mymechanic,
    github: "https://github.com/Dharmeshp1582/MyMechanic/tree/master",
    webapp:""
  },
  {
    id: 5,
    title: "Pokemon Web App",
    description:
      "A responsive React + Tailwind application that displays a list of Pokémon with images, details, and an interactive card-based UI.",
    image: pokemon,
    tags: ["React JS", "Tailwind CSS", "API"],
    github:"https://github.com/Dharmeshp1582/pokemonweb",
    webapp: "https://pokemonweb-nu.vercel.app/",
  },
  {
    id: 6,
    title: "E-commerce Platform for Shoes",
    description:
      "A frontend-only e-commerce platform for showcasing and filtering a shoe collection. Designed using HTML, CSS, and vanilla JavaScript with a focus on UI/UX.",
    image: shoes,
    tags: ["HTML", "CSS", "JavaScript"],
    github:"https://github.com/Dharmeshp1582/frontend_ecommerce_website",
    webapp: "https://frontend-ecommerce-website-ashen.vercel.app/",
  },
];
