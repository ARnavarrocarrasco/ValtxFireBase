import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { deleteUser } from "firebase/auth";
import { app } from ".";

const auth = getAuth();

export const eliminarUsuario = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            deleteUser(user).then(() => {
                console.log('User deleted')
              }).catch((error) => {
                console.error(error)
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}
