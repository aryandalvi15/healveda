"use client"

import React from 'react'
import Services from '../../pages/Services'
import GradientText from '@/components/GradientText'

const Features = () => {
  return (
    
    <div className='h-screen w-screen flex flex-col justify-center font-bold bg-black'>
       <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={5}
        showBorder={true}
        className="inline-block text-8xl flex-col justify-center"
      >
     SERVICES OFFERED
</GradientText>
      <Services/>
    </div>
  )
}

export default Features
