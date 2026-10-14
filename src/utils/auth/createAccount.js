import { auth } from "../../firebase.config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function createAccount(email, password) {
    try {
        const userObject = await createUserWithEmailAndPassword(auth, email, password);
        return userObject.user;
    }
    catch (error) {
        throw error;
    }
}