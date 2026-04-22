'use client'
import React, { useRef } from 'react'
import Counter from './Counter'

export default function StatCard({stat}) {
  const ref = useRef(null)
  return (
    <div className='py-7 px-5 bg-white rounded-xl'>
      <div className='h-15 w-15 flex justify-center items-center bg-AltPrimary rounded-full mb-7.5'>
        <div className='text-Mint text-2xl'>{stat.icon}</div>
      </div>
      <h2 className='text-[40px] font-medium text-AltPrimary '>
      <Counter max={stat.title} symbol={stat.symbol} ref={ref}/>
      </h2>
      <p className='text-AltPrimary tablet:max-w-60'>{stat.description}</p>
    </div>
  )
}
