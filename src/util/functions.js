import { doc, setDoc, getDoc  } from "firebase/firestore"; 
import { db } from "../../firebaseConfig.js"

export async function Save(script){
  // Add a new document in collection "cities"
  await setDoc(doc(db, "script", script.label), script);
}


export async function get(id){
  const docRef = doc(db, "script", id);
  const docSnap = await getDoc(docRef);
  let data = null

  if (docSnap.exists()) {
    data = await docSnap.data();
    console.log(data);
    return data
  } else {
    // docSnap.data() will be undefined in this case
    throw new Error("No such Script!");
  }
}


