import React from 'react'

import skills from '@/data/skills.json'
import SectionContainer from '../Section/SectionContainer'
import SectionHeader from '../Section/SectionHeader'
import Skill from './Skill'
import Image from 'next/image'

const Skills = () => {
  return (
    <SectionContainer id='skills'>
      <div className='section-contents mx-[22px] md:mx-[60px]'>
        <SectionHeader plainText='These are my explored ' highlightText='Technologies' />
        <div className='card w-full px-[33px] py-[27px] flex flex-col flex-wrap md:flex-row justify-center items-center gap-[19px] md:gap-[33px]'>
          {
            skills.slice(0,11).map((skill, id) => (
              <Skill key={id} name={skill.name} icon={skill.icon} />
            ))
          }

          <section className='hidden md:flex flex-wrap justify-center items-center gap-[19px] md:gap-[33px]'>
          <div className="w-full md:h-[5px]"></div>
          {
            skills.slice(11,17).map((skill, id) => (
              <Skill key={id} name={skill.name} icon={skill.icon} />
            ))
          }
          <div className="w-full md:h-[5px]"></div>
          {
            skills.slice(17,23).map((skill, id) => (
              <Skill key={id} name={skill.name} icon={skill.icon} />
            ))
          }
          <div className="w-full md:h-[5px]"></div>
          {
            skills.slice(23,27).map((skill, id) => (
              <Skill key={id} name={skill.name} icon={skill.icon} />
            ))
          }
          <div className="w-full md:h-[5px]"></div>
          {
            skills.slice(27,32).map((skill, id) => (
              <Skill key={id} name={skill.name} icon={skill.icon} />
            ))
          }
          <div className="w-full md:h-[5px]"></div>
          {
            skills.slice(32,37).map((skill, id) => (
              <Skill key={id} name={skill.name} icon={skill.icon} />
            ))
          }
          <div className="w-full md:h-[5px]"></div>
          {
            skills.slice(37,45).map((skill, id) => (
              <Skill key={id} name={skill.name} icon={skill.icon} />
            ))
          }
          <div className="w-full md:h-[5px]"></div>
          {
            skills.slice(45,47).map((skill, id) => (
              <Skill key={id} name={skill.name} icon={skill.icon} />
            ))
          }
          <div className="w-full md:h-[5px]"></div>
          {
            skills.slice(47,48).map((skill, id) => (
              <Skill key={id} name={skill.name} icon={skill.icon} />
            ))
          }
          </section>

        </div>
      </div>
      <div>
        <Image src='/tech_stack_grid.svg' alt='Background grid decoration' width={569} height={373} className='hidden dark:hidden md:block -z-10 absolute -left-[125px] -top-[39px]' />
      </div>
    </SectionContainer>
  )
}

export default Skills