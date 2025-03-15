import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative flex flex-row items-center z-20 mx-auto md:gap-[37px] md:mx-10'>
      <div className='flex flex-col gap-[13px] items-center md:gap-[34px] md:my-[58px] md:items-start'>
        <h1 className='text-2xl/1 text-center font-semibold block md:text-[40px] md:text-start md:inline'>
          <span className='-ml-3'>😁</span> 
          Hello, I am Anurag Bhattacharjee, I am a {' '}
          <span className='block text-[27px] highlight mt-2 md:text-[45px] md:inline md:mt-0'>Software Engineer</span>
        </h1>
        <p className='text-center text-sm mx-6 md:text-[22px] md:text-start md:mx-0'>
          I am your Friendly Neighbourhood coder boy who loves to develop in .js .py .cpp
        </p>
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' className='self-center bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm md:self-start md:text-xl/6'>
          Let&apos;s Connect{' '}
          <img src='/arrow_right_icon.svg' alt='Arrow Right Icon' />
        </a>
      </div>
      <div>
        <Image src='/profile_light_purple.png' alt='Light Purple Rectangle' width={372} height={430} className='hidden md:block w-[372px] h-[430px] absolute right-0 -z-10' />
        <Image src='/profile_dark_purple.png' alt='Dark Purple Rectangle' width={372} height={430} className='hidden md:block w-[372px] h-[430px] absolute right-0 -z-10' />
        <Image src='/github.png' alt='Profile Pic' width={357} height={390} className='rounded-3xl hidden md:block min-w-[357px] h-[390px] z-10 mr-[7.7px] my-[6.5px]' />
      </div>
    </section>
  )
}

export default Hero