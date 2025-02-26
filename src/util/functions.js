import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc  } from "firebase/firestore"; 
import { db } from "../../firebaseConfig.js"

/**
 * @typedef {Object} Question
 * @property {string} id -
 * @property {string} type -
 * @property {string} question - 
 * @property {string} template - 
 * @property {string} placeholder - 
 * @property {Array<string>} options - 
 * @property {boolean} required - 
 * @property {number} min - 
 * @property {number} max - 
 * @property {string} name -
 */

/**
 * @typedef {Object} Script
 * @property {string} label - Name of the Script to identify it into the database.
 * @property {Array<Question>} script - List of questions that belongs to the script.
 * @property {Array<string>} resources - List of external resources.
 */

/**
 * @typedef {Object} User
 * @property {string} uid - The unique ID of the user.
 * @property {string} email - The email of the user.
 * @property {boolean} emailVerified - Indicates whether the user's email has been verified.
 * @property {string} displayName - The display name of the user.
 * @property {string} photoURL - The URL of the user's profile photo.
 * @property {string} phoneNumber - The phone number of the user.
 * @property {string} providerId - The ID of the authentication provider.
 * @property {Object} metadata - Metadata about the user.
 * @property {string} metadata.creationTime - The date and time the user account was created.
 * @property {string} metadata.lastSignInTime - The date and time of the user's last sign-in.
 */

/**
 * Save a script into the database. 
 * @param {Script} script - Object that represents the whole script.
 * @return {Promise<void>}
 */
export async function Save(script){
  // Add a new document in collection "cities"
  await setDoc(doc(db, "script", script.label), script);
}

/**
 * Gets a particular Script based on the id.
 * @param {string} id - Label of the script.
 * @return {Script | null}
 *  @throws {ReferenceError} Will throw an error if can't fetch the data or data is undefined.
 */
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
    throw new ReferenceError("No such Script!");
  }
}

/**
 * Login a user using email and password
 *
 * @param {string} email
 * @param {string} password
 *
 * @return {null | Promise<User>}
 */
export async function Login(email, password){

  const auth = getAuth();
  let userReturn = null;
  
  try{
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    userReturn = user;
  }
  
  catch (error){
    const errorMessage = error.message;
    const errorCode = error.code;
    console.error(errorCode);
  }

  finally{
    return userReturn;
  }
}
