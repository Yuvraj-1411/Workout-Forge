import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO GET</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Unleashed<span className='text-blue-950'>&</span><span className='text-blue-400'>Jacked</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I hereby acknowledge that by following the WorkoutForge program, I accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass monstrosity. </span>I understand that this may lead to severe body dysmorphia and the inability to fit through doors.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}
