/**
 * Skills Data
 * 
 * Contains categorized skills with icons for display in the Skills section.
 * Organized by technology categories: Frontend, Backend, Database & Tools.
 * 
 * @file skillsData.js
 * @description Skills data with icons for Skills section
 */

/**
 * Skills Data Array
 * Each category contains an array of skill items with name and icon
 */
export const skillsData = [
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", icon: "⚛️" },
      { name: "React Native", icon: "📱" },
      { name: "JavaScript", icon: "🟨" },
      { name: "HTML5", icon: "🔷" },
      { name: "CSS3", icon: "💎" },
      { name: "Tailwind CSS", icon: "🌊" },
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "⚡" },
      { name: "REST APIs", icon: "🔌" },
    ]
  },
  {
    category: "Database & Tools",
    items: [
      { name: "MongoDB", icon: "🍃" },
      { name: "Sequelize / SQL", icon: "🗄️" },
      { name: "React Query", icon: "🔄" },
      { name: "Git", icon: "🔧" },
    ]
  }
];
