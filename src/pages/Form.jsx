import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Form from "../components/Form"
import Loading from "./Loading"
import { get } from "../util/functions"


function App() {
	const navigate = useNavigate()
	const { Id } = useParams()
	const [ data, setData ] = useState(null)

	useEffect(()=>{
		if(!data){
			get(Id)
  		.then((response) => setData(response))  
			.catch( (error) =>{ navigate('/404') });
		}
	},[data])

	return (
			<div className='min-h-screan w-screen'>
				{
					data? <Form data={data} /> : <Loading />
				}
			</div>
		)
}

export default App