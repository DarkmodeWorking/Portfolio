import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='card relative items-center mx-6 flex flex-col px-[33px] py-[27px] divide-zinc-300 gap-[54px] md:gap-[35px] mb-[67px] md:mb-[42px]'>
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
    </section>
  )
}

export default Contact