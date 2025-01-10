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
        <SectionHeader plainText='This is my ' highlightText='Tech Stack' />
        <div className='card w-full px-[33px] py-[27px] flex flex-col flex-wrap md:flex-row justify-center items-center gap-[19px] md:gap-[33px]'>
          {
            skills.slice(0,11).map((skill, id) => (
              <Skill key={id} name={skill.name} icon={skill.icon} />
            ))
          }
          <div className="w-full md:h-[5px]"></div>
          {
            skills.slice(11,16).map((skill, id) => (
              <Skill key={id} name={skill.name} icon={skill.icon} />
            ))
          }
          <div className="w-full md:h-[5px]"></div>
          {
            skills.slice(16,22).map((skill, id) => (
              <Skill key={id} name={skill.name} icon={skill.icon} />
            ))
          }
          <div className="w-full md:h-[5px]"></div>
          {
            skills.slice(22,26).map((skill, id) => (
              <Skill key={id} name={skill.name} icon={skill.icon} />
            ))
          }
          <div className="w-full md:h-[5px]"></div>
          {
            skills.slice(26,31).map((skill, id) => (
              <Skill key={id} name={skill.name} icon={skill.icon} />
            ))
          }
          <div className="w-full md:h-[5px]"></div>
          {
            skills.slice(31,36).map((skill, id) => (
              <Skill key={id} name={skill.name} icon={skill.icon} />
            ))
          }
          <div className="w-full md:h-[5px]"></div>
          {
            skills.slice(36,44).map((skill, id) => (
              <Skill key={id} name={skill.name} icon={skill.icon} />
            ))
          }
          <div className="w-full md:h-[5px]"></div>
          {
            skills.slice(44,50).map((skill, id) => (
              <Skill key={id} name={skill.name} icon={skill.icon} />
            ))
          }
        </div>
      </div>
      <div>
        <Image src='/tech_stack_grid.svg' alt='Background grid decoration' width={569} height={373} className='hidden dark:hidden md:block -z-10 absolute -left-[125px] -top-[39px]' />
      </div>
    </SectionContainer>
  )
}

export default Skills