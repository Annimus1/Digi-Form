import { useState } from "react"
import Question from "./components/Question"
import QuestionRadio from "./components/QuestionRadio"

export default function App() {
	let hash5 = crypto.randomUUID()
	let hash6 = crypto.randomUUID()

	const [ test, setTest ] = useState('')
	const [ note, setNote ] = useState(undefined)

	const questionTypes = {
		text:'text',
		number:'number',
		radio:'radio'
	}

	let data =[
		{id:'name', question:'Clients Name', template:`Clients name: `, type:'text', placeholder:'Name ...'}, // tested
		{id:'address', question:'Address', template:`Address: `, type:'text', placeholder:'Address ...'}, // tested
		{id:'price', question:'Asking price', template:`Asking Price: `, type:'number'}, // tested
		{id:'reason', question:'Reason', template:`Reason: `, type:'text', placeholder:'The reason is ...'}, // tested
		{id:'list', question:'Is the property listed on the market?', template:`Listed: `, type:'radio', placeholder:'', name:'listing'}, // tested
		{id:'rent', question:'Is the property rented?', template:`Rented: `, type:'radio', placeholder:'', name:'renting'}, 
		//{id:hash1, template:`Level of interest in selling: `}, // leve of interest
		//{id:'name', template:`Client's name: `, type:'text', placeholder:"Client's name ..."}, // Reason
		//{id:'address', template:`Address: `, type:'text', placeholder:"Address ..."}, // Reason
		// yes or no [  TO DO ]
	]

	function prebuildNote(d){
		let preview = ''
		
		d.forEach(
			e => {
				try {
					if(document.getElementById(e.id).value){
						preview += e.template + document.getElementById(e.id).value +'\n'
						//console.log('preview: ',preview);
					}
				} catch (error) {
					console.log(e);
				}
			}
		)

		return preview
	}

	function handleNote(e){
		let NOTE = prebuildNote(data) 
		setNote(NOTE)
	}

	return (
		<>
		<header className="w-screen p-2 bg-william-600">

		<h2 className="text-xl text-william-50">DigiForm</h2>

		</header>
		
		<form 
			className="w-screen h-full flex flex-col justify-center items-center md:flex-row bg-william-200"
			onChange={e => {handleNote(e)}}
		>
			
			{/* Script Side / questions to ask */}
			<div className=" w-full flex flex-col items-start md:h-full md:border-r md:border-r-william-400 md:p-4">

				<h2 className="text-3xl font-serif">[client] Script</h2>

				{
					data.map( (element) => {
						// console.log(element.id);
						return (element.type === questionTypes.text || element.type === questionTypes.number) ?
						<Question key={element.id} question={element}/> :
						//<h1>hola</h1>
						<QuestionRadio key={element.id} question={element} />
					})
				}


				{/* <div className="flex flex-col p-1     md:mb-3">
					<label
						className="text-md font-mono" 
					>Level of interest in selling (1 - 10)</label>
					<div className="flex items-center">
						<input 
							id={hash1}
							className="border p-1 rounded"
							type={'range'} 
							placeholder={''} 
							min={1}
							max={10} 
							defaultValue={test}
							value={test}
							onChange={ e => { setTest(e.target.value)}}
							/>
						<input  className='w-10 text-xl ml-2' type="number" value={test}  onChange={ e => { setTest(e.target.value)}}/>
					</div>
				</div> */}


				


				{/* <div className="flex flex-col md:flex-row p-1     md:mb-3">
					<label>Anual or monthly lease?</label>

					<div className="flex gap-1 md:ml-3">
						<label htmlFor={hash6}>Anual</label>
						<input type={'radio'} value={'anual'} id={hash6} name={hash5} 
						onChange={(e) => alert(`It's a ${e.target.value} lease.\n`)}/>
					</div>

					<div className="flex gap-1 md:ml-3">
						<label htmlFor={hash5}>Monthly</label> 
						<input type={'radio'} value={'Monthly bases'} id={hash5} name={hash5}
						onChange={(e) => alert(`It's a ${e.target.value} lease.\n`)}/> 
					</div>
				
				</div> */}

			</div>

			{/* Note Side / note to copy */}
			<div className="w-full flex flex-col items-center md:h-full p-1 px-3">
				<h2 className="text-3xl font-serif">Note</h2>
				<textarea name="" id="" className="w-full h-80 rounded p-2 font-mono" placeholder="Here the note will be generated" value={note}></textarea>
				<input 
					className="border py-2 md:mt-2 px-6 rounded bg-gradient-to-r from-william-300 to-william-500 hover: hover:cursor-pointer"
					type="submit"
				/>
			</div>

		</form>
		</>
	)
}
