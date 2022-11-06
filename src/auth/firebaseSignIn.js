import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase'

async function logInWithEmailAndPassword(email, password){
  try{
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (err) {
    console.error(err);
    alert(err.message);
    return false;
  }
}

export {logInWithEmailAndPassword};