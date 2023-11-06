import Footer from '../components/Footer'
import DemoBtn from '../components/DemoBtn'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'

export default function Home() {
	return(
		<div className='w-full min-h-screen h-full  bg-william-100'>

			<header className="w-full h-12 bg-william-600 fixed top-0">
			<div className='flex items-center px-4 pt-1 hover:cursor-pointer'>
				<svg className='fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm7 2h8v2h-8V7zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2zM6 7h2v2H6V7zm0 4h2v2H6v-2zm0 4h2v2H6v-2z"></path></svg>
				<h2 className="text-2xl px-2 font-semibold text-william-50">DigiForm</h2>
			</div>
			</header>
			
			<Hero />

			<Benefits />

			<section className=' w-full flex justify-center mb-16'>
				<DemoBtn />
			</section>
			
			<Footer />
		
		</div>
	)
}
