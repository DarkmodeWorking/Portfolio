'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Reveal from './Reveal'
import { motion, useMotionValue } from 'framer-motion'

const Contact = () => {
	const ref = useRef<HTMLElement>(null)
	const posX = useMotionValue(0)
	const posY = useMotionValue(0)

	const updatePos = (e: MouseEvent) => {
		if (!ref.current) return

		const { top, left } = ref.current.getBoundingClientRect()

		posX.set(e.x - left)
		posY.set(e.y - top)
	}

	useEffect(() => {
		window.addEventListener('mousemove', updatePos)
		return () => {
			window.removeEventListener('mousemove', updatePos)
		}
	}, [])

  return (
		<Reveal initialY={40} delay={0.5}>
			<section ref={ref} id='contact' className='card relative items-center mx-6 flex flex-col px-[33px] py-[27px] divide-zinc-300 gap-[54px] md:gap-[35px] mb-[67px] md:mb-[42px] group'>
				<div className='flex flex-col md:flex-row gap-5 md:justify-between md:w-full'>
					<h2 className='font-semibold text-[22px] md:text-[40px] md:max-w-[462px]'>
						Want me on your team?
					</h2>
					<div className='flex flex-col gap-5 items-center md:items-end'>
						<a href='mailto:bhattacharjeeanurag3@gmail.com' className='self-center md:self-start bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-lg md:text-xl/1 font-normal'>
							Lets get in touch
							<img src="/mail_icon.svg" alt="Mail Icon" />
						</a>
						<div className='flex flex-row gap-1'>
							<a href="https://www.github.com/DarkmodeWorking" className='contact-button'>
								<Image src='/github_logo_dark.svg' alt='Github Icon' height={16} width={17} className='hidden dark:block' />
								<Image src='/github_logo.svg' alt='Github Icon' height={16} width={17} className='dark:hidden block' />
							</a>
							<a href="https://www.github.com/DarkmodeWorking" className='contact-button'>
								<Image src='/twitter_icon_dark.svg' alt='twitter Icon' height={16} width={17} className='hidden dark:block' />
								<Image src='/twitter_icon.svg' alt='twitter Icon' height={16} width={17} className='dark:hidden block' />
							</a>
							<a href="https://www.github.com/DarkmodeWorking" className='contact-button'>
								<Image src='/stackoverflow_icon_dark.svg' alt='Github Icon' height={16} width={17} className='hidden dark:block' />
								<Image src='/stackoverflow_icon.svg' alt='Github Icon' height={16} width={17} className='dark:hidden block' />
							</a>
						</div>
					</div>
				</div>
				<small>Copyright &copy; Anurag Bhattacharjee 2025</small>
				<motion.div
					className='absolute h-64 w-64 bg-gradient-radial from-indigo-700 to-transparent rounded-full blur-3xl z-10 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none'
					style={{
						left: posX,
						top: posY,
						transform: 'translate(-50%, -50%)'
					}}
				/>
			</section>
		</Reveal>
    
  )
}

export default Contact