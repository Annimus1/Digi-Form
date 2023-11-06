import React from 'react'
import DemoBtn from './DemoBtn'


function Hero() {
  return (
    <section className=' w-full flex justify-around p-10 pt-32'>
			<img className='w-2/4 rounded' src="https://images.unsplash.com/photo-1417733403748-83bbc7c05140?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
			<div className='w-1/3 text-lg flex flex-col'>
				<p><strong className='text-william-800 font-bold'>DigiForm</strong> is an innovative application specifically designed to help cold callers optimize their time and improve efficiency in the sales process. The application offers a range of features and tools designed to facilitate note creation and minimize wrap-time, allowing sales representatives to focus on what matters most: establishing meaningful connections with potential customers and closing deals.</p>
				<DemoBtn />
			</div>
		</section>
  )
}

export default Hero
