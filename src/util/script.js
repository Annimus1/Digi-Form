const data ={
  label:'TrueBuyers',
  script: [
    { id:'name', question:'Clients Name', template:`Clients name: `, type:'text', placeholder:'Name ...', options:[], required:false }, // tested
    { id:'address', question:'Address', template:`Address: `, type:'text', placeholder:'Address ...', required:true, options:[], required:false }, // tested
    { id:'price', question:'Asking price', template:`Asking Price: `, type:'number' }, // tested
    { id:'reason', question:'Reason', template:`Reason: `, type:'text', placeholder:'The reason is ...', options:['Downsizing','moving to another state'], required:false }, // tested
    { id:'list', question:'Is the property listed on the market?', template:`Listed: `, type:'radio', placeholder:'', name:'listing', options:[], required:false }, // tested
    { id:'rent', question:'Is the property rented?', template:`Rented: `, type:'radio', placeholder:'', name:'renting', options:[], required:false }, // tested
    { id:'lease', question:'What kind of lease do the tenants have?', template:`Type of lease: `, type:'radio-name', placeholder:'', name:'lease', required:false, options:['Anual Lease','Monthly']}, //tested 
    {id:'scale', question:'What the level of interest? (1-10)', template:`Level of interest in selling: `, type:"scale", options:[], min:0, max:10}, 
  ]
}

export default data;