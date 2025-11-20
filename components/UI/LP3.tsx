import React from 'react'
import Card from './Card'

export default function LP3() {
  return (
    <div className=' flex flex-col items-center justify-center py-10 px-5  '>
        <h1 className='text-3xl font-bold mb-6'>What Our <span className='text-blue-600'> Learners </span> Say</h1>
        <div className='grid md:grid-cols-3 gap-6'>
            <Card propes="I improved my problem-solving skills and cracked my first coding contest thanks to this platform!" />
            <Card propes="This platform helped me understand complex algorithms easily and boosted my confidence." />
            <Card propes="The interactive lessons and community support made learning to code enjoyable and effective." />
        </div>

    

      
    </div>
  )
}
