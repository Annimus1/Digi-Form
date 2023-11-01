import React from 'react'

function Question({question}) {
	
	// text
  if(question.type === 'text'){
    return (
      <div className="flex flex-col p-1     md:mb-3">
	<label htmlFor={question.id}>{question.question}</label>
	<input 
		className="border p-1 rounded"
		type={question.type} 
		placeholder={question.placeholder} 
		min={0} 
		id={question.id}
		value={undefined}
	/>
      </div>
    )
  }

	// Number
   else if( question.type === 'number'){
     return(
	<div className="flex flex-col p-1     md:mb-3">
	  <label
	    className="text-md font-mono" 
	    htmlFor={question.id}
	  >{question.question}</label>
	  <input 
	    className="border p-1 rounded"
	    type={question.type}  
	    min={0}
	    placeholder={0} 
	    id={question.id}
	    value={undefined}
	  />
	</div>
	)

   return <h1>{question.id}</h1>
  }

	return null
}

export default Question
