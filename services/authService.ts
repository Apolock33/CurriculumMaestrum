import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth();

export async function SignIn(email: string, password: string) {
    return await signInWithEmailAndPassword(auth, email, password);
}

export async function SignOut() {
    return await signOut(auth);
}

export async function SignUp(email: string, password: string) {
    return await createUserWithEmailAndPassword(auth, email, password);
}