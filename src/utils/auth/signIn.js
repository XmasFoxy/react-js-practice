import { auth } from "../../firebase.config.js";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function signIn (email, password) {
    try {
        const userObject = await signInWithEmailAndPassword(email, password);
        return userObject.user;
    }
    catch (error) {
        throw error;
    }
}