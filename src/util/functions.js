import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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

export async function Login(){
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  let userReturn = null;

  try {
    const result = await signInWithPopup(auth, provider)
    // The signed-in user info.
    const user = result.user;    
    userReturn = user;    
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);    
  }

  finally{
    return userReturn
  }

  
}


