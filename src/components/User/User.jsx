import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div className='w-full h-[35vh] flex items-center justify-center'>
      <h1 className='text-6xl text-orange-700 font-sans font-bold'>User:{userid}</h1>
    </div>
  )
}

export default User
