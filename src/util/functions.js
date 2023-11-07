export async function writeJson(data){
  let string = await JSON.stringify(data)
  console.log(string)  
}

