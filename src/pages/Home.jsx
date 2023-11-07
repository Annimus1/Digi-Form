import Footer from '../components/Footer'
import DemoBtn from '../components/DemoBtn'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Header from '../components/Header'

export default function Home() {
	return(
		<div className='w-full min-h-screen h-full  bg-william-100'>

			<Header />
			
			<Hero />

			<Benefits />

			<section className=' w-full flex justify-center mb-16'>
				<DemoBtn />
			</section>
			
			<Footer />
		
		</div>
	)
}
