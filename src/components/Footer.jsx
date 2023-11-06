import Social from './Social'

function Footer() {
  return (
    <footer className='w-full px-10 flex justify-around pb-4'>
			<div className='text-william-900'>
				<p>&copy; 2021 <strong className='text-william-700'>Pablo Vergara</strong></p>
				<Social />
			</div>
			<span className='text-sm text-william-700'>version: <span className='text-william-600 font-bold'>2</span>.0.0</span>
		</footer>
  )
}

export default Footer
