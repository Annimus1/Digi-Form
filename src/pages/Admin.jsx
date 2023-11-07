import { useState } from 'react'
import QuestionBuild from '../components/QuestionBuild'
import { writeJson } from '../util/functions'

import Header from '../components/Header'


function Admin() {
	const [ script, setScript ] = useState({label:'', script:[], resources:[]})
	const [ questionList, setQuestionList ] = useState([<QuestionBuild script={script} addToScript={setScript}/>])		
	
	return (
		<div className='min-h-screan w-screen'>
			<Header />
			<form className='bg-william-100 text-william-800 w-full min-h-screen pt-24 flex flex-col items-center'>
				<section>	
				<div className='mb-4'>
					<label>Script Name </label>
					<input 
            className='px-2 rounded outline-none text-xl'
						onChange={(element) =>{
							let prev = {...script}
							prev['label'] = element.target.value
							setScript(prev)
						}}
						type="text" 
						placeholder='name of the script'
					/>
				</div>

        <div className='mb-4'>
					<label>Resources </label>
					<input 
            className='px-2 rounded outline-none text-xl w-full'
						onChange={(element) =>{
              let prev = {...script}
              if(element.target.value.length != 0){
                let options = element.target.value.split(',')
                prev['resources'] = [] 
                options.forEach( e => {
                  prev['resources'].push(e) 
                })
                console.log(prev['resources'])
                setScript(prev);
              }
						}}
						type="text" 
						placeholder='Enter sources separated by comma.'
					/>
				</div>

					{
            // for each item on the list print another question builder
						questionList && questionList.map( (element, index) => {
							return(element)
						})
					}
					
				</section>

				<button
				className=' text-2xl self-center border pb-1 mt-3 w-10 h-10 text-center rounded-full text-black font-semibold bg-gradient-to-r from-william-300 to-william-500 hover:text-white hover:cursor-pointer'
				onClick={(event)=>{
					event.preventDefault();
					let prev = [...questionList]
					prev.push(<QuestionBuild script={script} addToScript={setScript}/>)
					setQuestionList(prev)
				}}
        title='Add question'
				>
          +
        </button>

				<button 
 				className='self-center border py-2 md:mt-2 px-6 rounded text-black font-semibold bg-gradient-to-r from-william-300 to-william-500 hover:text-white hover:cursor-pointer'
        onClick={(e) =>{ e.preventDefault(); writeJson(script)}}>log(sent to the database)</button>
			</form>
		</div>
	)
}

export default Admin