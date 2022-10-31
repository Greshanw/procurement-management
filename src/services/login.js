import { logInWithEmailAndPassword } from "../auth/firebaseSignIn";

async function loginUser(email, password){
    let validUser = logInWithEmailAndPassword(email, password);
    return validUser;
}

export {loginUser}