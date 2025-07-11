import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-28 py-12 text-white">
      <header className="mb-16">
        <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold">Experience</h2>
      </header>

      <ol className="relative border-s border-gray-600">
        <li className="mb-14 ms-6">
          <div className="absolute w-4 h-4 bg-gray-300 rounded-full mt-1.5 -start-2 border border-white" />

          <time className="mb-2 text-lg font-medium leading-none text-gray-400">
            Sep 2022 - Dec 2022
          </time>

          <article className="mt-3">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Intern Software Engineer
            </h3>
            <p className="text-gray-300 text-xl md:text-2xl mt-2 leading-relaxed">
              During my internship at NewLogic (September 2022 – December 2022), I worked remotely from Cebu City, 
              contributing to the development of a full-stack web application. 
              I designed and implemented a RESTful API using Express.js, 
              ensuring efficient and scalable backend functionality. 
              On the frontend, I built responsive and user-friendly interfaces with React.js, 
              focusing on usability and performance across various devices. Additionally, 
              I created comprehensive task documentation to streamline onboarding and reduce the time needed for task handovers,
              which improved team efficiency.
            </p>
          </article>
        </li>

        <li className="mb-14 ms-6">
          <div className="absolute w-4 h-4 bg-gray-300 rounded-full mt-1.5 -start-2 border border-white" />

          <time className="mb-2 text-lg font-medium leading-none text-gray-400">
            Feb 2024 - Jan 2025
          </time>

          <article className="mt-3">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Intern Software Engineer
            </h3>
            <p className="text-gray-300 text-xl md:text-2xl mt-2 leading-relaxed">
              During my internship at NewLogic (September 2022 – December 2022), I worked remotely from Cebu City, 
              contributing to the development of a full-stack web application. 
              I designed and implemented a RESTful API using Express.js, 
              ensuring efficient and scalable backend functionality. 
              On the frontend, I built responsive and user-friendly interfaces with React.js, 
              focusing on usability and performance across various devices. Additionally, 
              I created comprehensive task documentation to streamline onboarding and reduce the time needed for task handovers,
              which improved team efficiency.
            </p>
          </article>
        </li>
      </ol>
    </section>
  )
}

export default Experience
