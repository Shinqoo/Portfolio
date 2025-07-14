import React from 'react';
import { FaReact, FaVuejs, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiSolidity, SiPostgresql, SiSequelize, SiMysql } from 'react-icons/si';
// import { CgCPlusPlus } from 'react-icons/cg';

const techStacks = {
  "Front-End": ["React.js", "Vue.js", "JavaScript"],
  "Back-End": ["Node.js", "Express.js", "Solidity", "C (Programming Language)"],
  "Database": ["PostgreSQL", "SQL", "Sequelize"],
  "Others / Tools": ["Git"]
};

const techIcons = {
  "React.js": <FaReact className="text-3xl text-cyan-400 mx-auto mb-2" />,
  "Vue.js": <FaVuejs className="text-3xl text-green-400 mx-auto mb-2" />,
  "JavaScript": <SiJavascript className="text-3xl text-yellow-300 mx-auto mb-2" />,
  "Node.js": <FaNodeJs className="text-3xl text-green-500 mx-auto mb-2" />,
  "Express.js": <SiExpress className="text-3xl text-gray-300 mx-auto mb-2" />,
  "Solidity": <SiSolidity className="text-3xl text-white mx-auto mb-2" />,
  "C (Programming Language)": (
    <div className="text-3xl text-blue-400 font-bold mx-auto mb-2">C</div>
  ),
  "PostgreSQL": <SiPostgresql className="text-3xl text-blue-400 mx-auto mb-2" />,
  "SQL": <SiMysql className="text-3xl text-blue-200 mx-auto mb-2" />,
  "Sequelize": <SiSequelize className="text-3xl text-indigo-300 mx-auto mb-2" />,
  "Git": <FaGitAlt className="text-3xl text-orange-400 mx-auto mb-2" />,
};

const StackSection = () => {
  return (
    <section id="stack" className="py-12 px-4 bg-[#121212] text-white">
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
                  {techIcons[tech]}
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
