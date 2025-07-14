"use client";
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () =>{
  return (
    <section id="about" className='pb-12'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 text-center sm:text-left lg:mt-15'>
          <h1 className='text-white mb-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400'>
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={['Shinji T. Ishikawa', 1000, 'a Full Stack Developer', 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block text-4xl sm:text-5xl lg:text-6xl"
            />
          </h1>

          <p className="text-[#ABD7BE] text-lg sm:text-xl mb-8 lg:text-2xl leading-relaxed">
            A dedicated and detail-oriented software engineer with a passion for writing clean, 
            maintainable code and delivering practical, user-focused solutions. 
            I thrive in collaborative environments, where I can exchange ideas, 
            support my teammates, and build meaningful products together. 
            Always eager to learn and improve, I bring both technical skill and a positive, 
            team-driven mindset to every project I take on.
          </p>
          <div>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 hover:bg-slate-800 text-white mt-3'>
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <a 
                  href="/PDF/Ishikawa-resume.pdf"
                  download 
                  className="text-white"
                >
                  Download CV
                </a>
              </span>
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='relative rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] '>
            <Image
              src="/images/me.jpg"
              alt='hero image'
              className='absolute tranform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
} 

export default HeroSection