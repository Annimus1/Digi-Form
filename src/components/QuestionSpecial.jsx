import { useState } from 'react'

function QuestionSpecial({question}) {
	if(question.type == 'scale'){

		const [ value, setValue ] = useState('')

		const eventHandler = (event)=>{
			setValue(event.target.value)
			document.getElementById(question.id).value = event.target.value
		}

		return (
			<div className="flex flex-col p-1     md:mb-3">
						<label
							className="text-md font-mono" 
						>{question.question}</label>
						
						<div className="flex items-center pt-1">
							<span className='p-2 '>{question.min}</span>
							<input 
								className="border p-1 rounded outline-none"
								type={'range'} 
								placeholder={''} 
								min={question.min}
								max={question.max} 
								value={value}
								onChange={(e)=>{ eventHandler(e)}}
								/>
							<span className={`p-2 ${ value == question.max? 'text-william-800 font-bold':''} `}>{question.max}</span>
							<input
								id={question.id}
								className='w-16 outline-none text-xl ml-2 p-2 rounded	' 
								type="number" 
								min={question.min}
								max={question.max + 5}
								onChange={(e)=>{ eventHandler(e)}}
								value={value} />
						</div>
			</div>
		)
	}

	return <h1>holaa</h1>
}

export default QuestionSpecial
