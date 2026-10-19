import { auth } from "../../firebase.config.js";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function signIn (email, password) {
    const userObject = await signInWithEmailAndPassword(auth, email, password);
    return userObject.user;
}