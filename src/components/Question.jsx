import React from 'react'

function Question({question}) {
	
	// text
  if(question.type === 'text'){
		const datasetId = question.id+'-options'
    return (
      <div className="flex flex-col p-1     md:mb-3">
				<label htmlFor={question.id}>{question.question}</label>
				<input 
					className="border p-1 rounded w-5/6"
					type={question.type} 
					placeholder={question.placeholder} 
					min={0}
					list={datasetId} 
					id={question.id}
					value={undefined}
				/>
				<datalist id={datasetId}>
					{
						(question.options.length != 0) && question.options.map( ( option, index ) => {
							return <option key={option + index} value={option}></option>
						})
					}
				</datalist>
      </div>
  )}

	// Number
   else if( question.type === 'number'){
     return(
			<div className="flex flex-col p-1     md:mb-3">
				<label
					className="text-md font-mono" 
					htmlFor={question.id}
				>{question.question}</label>
				<input 
					className="border p-1 rounded w-5/6"
					type={question.type}  
					min={0}
					placeholder={0} 
					id={question.id}
					value={undefined}
				/>
			</div>
		)}

	return null
}

export default Question
