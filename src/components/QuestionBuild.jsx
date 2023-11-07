import { useState, useId } from 'react'

function QuestionBuild({ script, addToScript }) {

	const id = useId()
	const [ check, setCheck ] = useState(false)
  const [ question, setQuestion ] = useState({
    id, 
    type:'text', 
    question:'', 
    template:``, 
    placeholder:'', 
    options:[], 
    required:false, 
    min:0, 
    max:0, 
    name:''
  })

	const styles = {
		container:`flex justify-center items-center gap-2 py-2`,
		input:`px-2 rounded outline-none`
	}

	function quetionHandler( element, property ){
		let prev = {...question}
		if(property == 'options'){
			let options = element.target.value.split(',')
			prev[property] = [] 
			options.forEach( e => {
				prev[property].push(e) 
			})
			console.log(prev[property])
		}else{
			prev[property] = element.target.value
		}
		setQuestion(prev);
	}

  return (
    <article className='flex justify-center items-center rounded border mb-5 border-william-500 relative text-william-700' >
			<span className='absolute top-2 left-2 text-william-700' >{id}</span>

			<div className='w-full p-2 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-5'>
				<div className='flex justify-center items-center gap-2 py-2'>
					<label > Type</label>
					<select 
						className={styles.input}
						defaultValue={'text'} 
						onChange={ element => { quetionHandler(element, 'type') } } 
					>
						<option>text</option>
						<option>number</option>
						<option>radio</option>
						<option>radio-name</option>
						<option>scale</option>
					</select>
				</div>

				<div className='flex justify-center items-center gap-2 py-2'>
					<label>Required</label>
					<select 
						className={styles.input}
						defaultValue={false} 
						onChange={ element => { quetionHandler(element, 'required') } } 
					>
						<option value={true}>True</option>
						<option value={false}>False</option>
					</select>
				</div>

				<div className={ styles.container }>
					<label>Question</label>
					<input 
						required 
						className={styles.input} 
						type="text" 
						placeholder='Question ' 
						onChange={ element => { quetionHandler(element, 'question') } }
					/>
				</div>

				<div className={ styles.container }>
					<label>Template</label>
					<input 
						className={styles.input} 
						required 
						type="text" 
						placeholder='Template ' 
						onChange={ element => { quetionHandler(element, 'template') } }
					/>
				</div>

				<div className={ styles.container }>
					<label>Placeholder</label>
					<input
						className={styles.input} 
						type="text" 
						placeholder='placeholder ' 
						onChange={ element => { quetionHandler(element, 'placeholder') } }
					/>
				</div>

				<div className={ styles.container }>
					<label>Max</label>
					<input 
						className={styles.input} 
						type="number" 
						placeholder='max ' 
						onChange={ element => { quetionHandler(element, 'max') } }
					/>
				</div>

				<div className={ styles.container }>
					<label>Min</label>
					<input 
						className={styles.input} 
						type="number" 
						placeholder='min ' 
						onChange={ element => { quetionHandler(element, 'min') } }
					/>
				</div>

				<div className={ styles.container }>
					<label>Name </label>
					<input 
						className={styles.input} 
						type="text" 
						placeholder='name ' 
						onChange={ element => { quetionHandler(element, 'name')}}
					/>
				</div>

				<div className={ styles.container }>
					<label>Options</label>
					<input 
						className={styles.input} 
						type="text" 
						placeholder='gimme an option ' 
						onChange={ element => { quetionHandler(element, 'options') }}
					/>
				</div>
			</div>

			<button disabled={check} 
				onClick={(e)=>{
					e.preventDefault()
					// console.log(question);
					let prev = {...script} 					
					prev['script'].push(question) 
					addToScript(prev)
					setCheck(!check);
					}}>
				{
					!check? 
					<img src="/src/assets/check.svg" alt="check" title='click to add it to the script.'/> :
					<img src="/src/assets/checked.svg" alt="checked" title='Already added to the script.'/>
				}
			</button>

		</article>
  )
}

export default QuestionBuild
