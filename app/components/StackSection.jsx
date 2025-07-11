import React from 'react';

const techStacks = {
  "Front-End": ["React.js", "Vue.js", "JavaScript"],
  "Back-End": ["Node.js", "Express.js", "Solidity", "C"],
  "Database": ["PostgreSQL", "SQL", "Sequelize"],
  "Others / Tools": ["Git"]
};

const StackSection = () => {
  return (
    <section id="stack"  className="py-12 px-4 bg-[#121212] text-white">
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6">Stacks</h2>
        <div className="space-y-10">
          {Object.entries(techStacks).map(([category, stacks]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-4">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {stacks.map((tech) => (
                  <div
                    key={tech}
                    className="bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-gray-700 rounded-xl shadow-md p-4 text-center transition-all"
                  >
                    <span className="text-lg font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default StackSection;
