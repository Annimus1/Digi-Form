import React, { Component } from 'react'

export class Error extends Component {
  render() {
    return (
      
      <div className='w-screen h-screen bg-error-image bg-center bg-cover'>
        <div className='w-full h-full bg-black bg-opacity-60 '>
          <div className=' w-full h-2/3 flex flex-col justify-center items-center'>
          <h1 className='text-5xl font-bold text-william-700'>404</h1>
          <h2 className='text-2xl text-william-700'>Script not found</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Error
