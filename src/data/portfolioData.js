/**
 * Portfolio Data
 * 
 * Centralized data file containing all portfolio information:
 * - Personal information (name, contact, location, summary)
 * - Work experience details
 * - Project information
 * - Education and certification details
 * 
 * @file portfolioData.js
 * @description Portfolio data configuration
 */

/**
 * Personal Information
 * Contains all personal details displayed in the portfolio
 */
export const personalInfo = {
  useName:"Tushar Patil",
  name: "Tushar Nana Patil",
  role: "React / React Native / MERN Developer",
  email: "tusharpatil21324@gmail.com",
  phone: "9518914454",
  github: "github.com/TusharN-Patil",
  linkedin: "linkedin.com/in/tusharpatil1702",
  location: "Pune, Maharashtra, India",
  summary: "MERN Stack Developer with 2+ years of hands-on experience specializing in building scalable, reusable, and testable components. Passionate about creating seamless user experiences across web and mobile platforms.",
  aboutText: [
    "MERN Stack Developer with over 2 years of hands-on experience in building scalable web and mobile applications. I specialize in creating performant, reusable, and maintainable code that delivers exceptional user experiences.",
    "My expertise lies in React.js and React Native, with a strong focus on performance optimization using advanced hooks like useMemo and useCallback. I have successfully delivered production-ready applications in the E-commerce and Healthcare domains.",
    "My approach combines clean code principles with modern development practices, ensuring that every project I work on is not only functional but also scalable and maintainable for the long term."
  ],
  stats: {
    experience: "2+",
    projects: "10+",
    technologies: "15+",
    clients: "5+"
  }
};

/**
 * Skills Data (Legacy - kept for backward compatibility)
 * Note: Skills are now managed in skillsData.js
 */
export const skills = [
  {
    category: "Programming Languages",
    items: ["C", "C++", "JavaScript", "TypeScript", "Java", "SQL"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.js", "React Native", "Node.js", "Express.js"]
  },
  {
    category: "Databases & Backend",
    items: ["MongoDB", "Firebase", "SQL", "REST APIs"]
  },
  {
    category: "Tools & Platforms",
    items: ["Android Studio", "Xcode", "Git", "GitHub", "VS Code", "React Native Debugger", "Postman", "Google Play Console", "App Store Connect", "Cursor AI"]
  }
];

/**
 * Work Experience
 * Array of work experience objects with company, role, and contributions
 */
export const workExperience = [
  {
    company: "SpidronTech LLP",
    location: "Pune, Maharashtra",
    role: "Associate Software Engineer",
    period: "Nov 2023 - Dec 2025",
    contributions: [
      "Designed scalable and reusable UI components, reducing development time by 25% and improving maintainability across React Native projects.",
      "Accelerated cross-platform mobile app development by 50% through optimized component architecture and clean coding practices.",
      "Integrated RESTful APIs and optimized backend logic using Node.js, Express.js, MongoDB, and SQL, improving application reliability by 40%.",
      "Managed complete Android and iOS deployment processes including APK/AAB generation, Play Store publishing, App Store Connect uploads, and TestFlight releases.",
      "Utilized AI tools such as Cursor AI and Agentic AI to automate workflows and improve debugging efficiency.",
      "Improved performance and code quality through profiling, optimization, and structured code reviews."
    ]
  }
];

/**
 * Projects
 * Array of project objects showcasing featured work
 */
export const projects = [
  {
    title: "Sports Activity Social Networking Application",
    year: "2024",
    technologies: [
      "React Native",
      "Redux Toolkit",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "PHP (Laravel)"
    ],
    details: [
      "Developed a sports and events social platform serving users aged 16-90.",
      "Increased user engagement by 30% through interactive UI and activity-based features.",
      "Integrated backend APIs to improve responsiveness and overall application performance."
    ]
  },
  {
    title: "Online Food Delivery Marketplace for Collectibles",
    year: "2024",
    technologies: [
      "React Native",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase"
    ],
    details: [
      "Built a high-performance e-commerce mobile application for selling collectibles.",
      "Improved platform reliability and performance by 35% through optimized workflows.",
      "Implemented secure multi-payment options and dynamic product management."
    ]
  },
  {
    title: "Calendar Web Application",
    year: "2025",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    details: [
      "Developed a business-focused calendar application to manage projects end-to-end.",
      "Integrated multiple calendar platforms into a unified system.",
      "Enhanced productivity and task tracking, improving user experience by 40%."
    ]
  },
  {
    title: "HRMS Mobile Application",
    year: "2025",
    technologies: [
      "React Native",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase"
    ],
    details: [
      "Built an HR automation platform for attendance, payroll, timesheets, and reporting.",
      "Reduced manual errors by 60% and increased attendance accuracy to 95%.",
      "Improved overall application efficiency by 30% through performance optimization."
    ]
  }
];

/**
 * Education Information
 */
export const education = {
  institution: "N.I.T.M.S College, Nagpur University",
  degree: "Bachelor of Computer Applications (BCA)",
  field: "Computer Science",
  cgpa: "7.10/10",
  period: "Aug 2020 - Jun 2023",
  coursework: [
    "Object-Oriented Programming",
    "Databases",
    "Data Structures and Algorithms",
    "Operating Systems",
    "Computer Networks",
    "Advanced Data Structures",
    "Project Planning and Management"
  ]
};

/**
 * Certification Information
 */
export const certification = {
  institution: "JSpiders & QSpiders - Software Development Training Institute, Pune",
  description: "Completed Full Stack Development training with hands-on experience in modern web and mobile technologies, real-world projects, and collaborative software development practices."
};
