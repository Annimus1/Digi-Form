import React from 'react'

function QuestionRadio({question}) {

  // Radio button imput
  if(question.type === 'radio'){

    const yes = question.id+'yes'
    const no = question.id+'no'

    function handleValue(){
      let elements = document.getElementsByName(question.name) // -> get all elements related with the same name
      
      elements.forEach( e => {
        /*For each element, check if it's selected*/
        if(e.checked){
          // if it's selected, set the value to the hidden input
          document.getElementById(question.id).value = e.value;
        }
      })
    }

    return (
      <div className="flex flex-col md:flex-row p-1     md:mb-3">
        <label>{question.question}</label>
        
        <input className='hidden' type="text" value={undefined} id={question.id} />
        <div className='flex gap-5 my-1 md:my-0 md:flex-none'>
          <div className="flex gap-1 md:ml-3">
            <label htmlFor={yes}>Yes</label>
            <input 
              id={yes} 
              type={'radio'} 
              value={'Yes.'} 
              name={question.name} 
              onChange={handleValue}
            />
          </div>

          <div className="flex gap-1 md:ml-3">
            <label htmlFor={no}>No</label> 
            <input 
              id={no} 
              type={'radio'} 
              value={'No.'} 
              name={question.name}
              onChange={handleValue}
            /> 
          </div>	
          </div>
		  </div>
    )
  }
  
  // radio con nombres
  else if(question.type === 'radio-name'){
    const first = question.id+'first'
    const second = question.id+'second'

    function handleValue(){
      let elements = document.getElementsByName(question.name) // -> get all elements related with the same name
      
      elements.forEach( e => {
        /*For each element, check if it's selected*/
        if(e.checked){
          // if it's selected, set the value to the hidden input
          document.getElementById(question.id).value = e.value;
        }
      })
    }
    
    return (
      <div className="flex flex-col md:flex-row p-1     md:mb-3">
				<label>Anual or monthly lease?</label>

        <input className='hidden' type="text" value={undefined} id={question.id} />
				
        <div className='flex gap-5  my-1 md:my-0 md:flex-none'>

          <div className="flex gap-1 md:ml-3">
            <label htmlFor={first}>{question.options[0]}</label>
            <input type={'radio'} value={question.options[0] + '.'} id={first} name={question.name} 
              onChange={handleValue}/>
          </div>

          <div className="flex gap-1 md:ml-3">
            <label htmlFor={second}>{question.options[1]}</label> 
            <input type={'radio'} value={question.options[1] + '.'} id={second} name={question.name}
              onChange={handleValue}/> 
          </div>
        </div>
			</div>
    )
  }

  return null
}

export default QuestionRadio
