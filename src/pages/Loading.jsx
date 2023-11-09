import React from 'react'
import Header from '../components/Header'

function Loading() {
  return (
    <div className='w-screen h-screen bg-william-200'>
      <Header />

      <div className='w-full h-full pt-16 flex justify-center items-center'>
        <div className='w-40 h-40 rounded-full border-l-8 border-william-600 animate-spin'></div>
      </div>
      
    </div>
  )
}

export default Loading
