import { useState } from "react"
import Question from "./components/Question"
import QuestionRadio from "./components/QuestionRadio"
import QuestionSpecial from "./components/QuestionSpecial"
import data from './util/script'

export default function App() {
	const [ note, setNote ] = useState(undefined)

	function prebuildNote(script){
		// for each question check if the value is different to undefined.
		let preview = ''
		
		script.forEach( ( question ) => {
				try {
					if(document.getElementById(question.id).value){
						preview += question.template + document.getElementById(question.id).value +'\n'
						//console.log('preview: ',preview);
					}
				} catch (error) {
					console.log(error);
				}
			}
		)

		return preview
	}

	function handleNote(e){
		let NOTE = prebuildNote(data.script) 
		setNote(NOTE)
	}

	return (
		<main className="min-w-[360px] w-full h-screen flex flex-col">
			
			<header className="h-12 bg-william-600">

			<h2 className="text-2xl p-2 font-semibold text-william-50">DigiForm</h2>

			</header>
			
			<form 
				className="p-2 bg-william-200 text-william-700 lg:h-full lg:flex "
				onChange={e => {handleNote(e)}}
			>
				
				{/* Script Side / questions to ask */}
				<section className="w-full  md:flex md:flex-col md:items-center">

					<h2 className="text-3xl font-serif my-3 text-center md:w-1/2">{data.label} Script</h2>

				<article className="md:w-3/4 lg:w-[90%]">

					{
						data.script.map( element => {
							switch (element.type) {
								case 'text':
									return <Question key={element.id} question={element}/>
									
								case 'number':
									return <Question key={element.id} question={element}/>
										
								case 'radio':
									return <QuestionRadio key={element.id} question={element} />
											
								case "radio-name":
									return <QuestionRadio key={element.id} question={element} />

								case 'scale':
									return <QuestionSpecial key={element.id} question={element} />
												
								default:
									return <h2>{element.type}</h2>
							}
						})
					}
					</article>

				</section>

				{/* Note Side / note to copy */}
				<section className="w-full flex flex-col items-center">
					<h2 className="text-3xl font-serif text-center my-2">Note</h2>
					
					<textarea 
						disabled 
						name="" 
						id="" 
						className="w-full h-96 rounded p-2 font-mono md:w-3/4 lg:w-[90%]" 
						placeholder="Here the note will be generated" 
						value={note}>
					</textarea>

					<input 
						className="w-1/3 border py-2 md:mt-2 px-6 rounded text-black font-semibold bg-gradient-to-r from-william-300 to-william-500 hover: hover:cursor-pointer"
						type="submit"
						value={'Copy'}
					/>
				</section>

			</form>
		</main>
	)
}
