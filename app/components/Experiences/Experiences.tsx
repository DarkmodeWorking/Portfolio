import React from 'react'
import experiences from '@/data/experiences.json'
import SectionContainer from '../Section/SectionContainer'
import SectionHeader from '../Section/SectionHeader'
import Experience from './Experience'

const Experiences = () => {
  return (
    <SectionContainer id='experience'>
      <div className='section-contents mb-[66px] md:mb-[43px] md:mx-[64px]'>
				<SectionHeader plainText='My Work' highlightText='Experience' />
				<div className='w-full px-6 md:px-[52px] flex flex-col gap-5'>
					{
						experiences.map((experience, id) => (
							<Experience key={id} id={id} image={experience.image} company={experience.company} role={experience.role} description={experience.description} dates={experience.dates} />
						))
					}
				</div>
			</div>
    </SectionContainer>
  )
}

export default Experiences