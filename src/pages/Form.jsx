import Form from "../components/Form"
import { demo, data } from "../util/script"


function App() {
	return (
			<div className='min-h-screan w-screen'>
				<Form data={demo} />
			</div>
		)
}

export default App