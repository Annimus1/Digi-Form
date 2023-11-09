import { useState } from "react"
import Question from "./Question"
import QuestionRadio from "./QuestionRadio"
import QuestionSpecial from "./QuestionSpecial"
import Header from "./Header"
import Footer from "./Footer"

export default function Form({ data }) {
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

	function copy(event){
			try{
				
				event.preventDefault()

				let text = document.getElementById("display");
				navigator.clipboard.writeText(text.value);
				// Sweet alert 2
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Copied to clipboard successfully',
					showConfirmButton: false,
					timer: 1500
				})
			}
			catch (e) {
				console.log(e)
				Swal.fire({
					position: 'top-end',
					icon: 'error',
					title: 'Something went wrong :c ',
					showConfirmButton: false,
					timer: 2000
				})
			}
	}

	return (
		<main className="min-w-[360px] w-screen h-screen flex flex-col accent-william-500 bg-william-200">

			<Header />
			
			<form 
				className="h-screen pt-12 p-2 text-william-700 lg:h-full lg:flex "
				onChange={e => {handleNote(e)}}
			>
				
				{/* Script Side / questions to ask */}
				<section className="w-full  md:flex md:flex-col md:items-center">

					<h2 className="text-3xl font-serif my-3 text-center md:w-1/2">{data.label} Script</h2>

					<article className=" w-screen md:w-3/4 lg:w-[90%]">
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
						id="display" 
						className="w-5/6 h-96 rounded p-2 font-mono md:w-3/4 lg:w-[90%]" 
						placeholder="Here the note will be generated" 
						value={note}>
					</textarea>

					<input 
						id="btnCopy"
						className="w-1/3 border py-2 md:mt-2 px-6 rounded text-black font-semibold bg-gradient-to-r from-william-300 to-william-500 hover: hover:cursor-pointer"
						type="submit"
						onClick={ e => copy(e)}
						value={'Copy'}
					/>
				</section>
			</form>

			<Footer />
		</main>
	)
}