import React from 'react'
import {motion} from 'framer-motion'

function UserCard(props) {
  return (
    <div className='bg-white rounded-lg shadow-lg p-3 mx-6 mb-12 '>
        <div className='w-48 h-48 overflow-hidden shadow'>
            <motion.img src={props.data.imgsrc} className='w-full h-full object-cover rounded-lg' alt="" whileHover={{scale:1.06}}/>
        </div>
        <h1 className='text-center font-semibold mb-4'>{props.data.name}</h1>
    </div>
  )
}

export default UserCard
