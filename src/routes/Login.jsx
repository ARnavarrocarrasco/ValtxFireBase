import React, {useState, useContext} from 'react'
import { GoogleAuthProvider,getAuth, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import toast from 'react-hot-toast';
import { AppContext } from '../App';

const provider = new GoogleAuthProvider();
const auth = getAuth();
auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// auth.useDeviceLanguage();

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(AppContext);

    const hazLoginGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            setUser(user)
            toast("inicio de sesion válido")
            console.log(`token : ${token}`)
            console.log(`user : ${user}`)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    
    const hazLoginEmail = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                setUser(user)
                toast("inicio de sesion válido")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
  return (
    <div className='flex flex-col gap-4 items-center'>
        <h1 className='text-xl font-semibold text-sky-700 mb-4'>Este es el login</h1>
        <p className='text-sm '>Haz click en el siguiente botón para hacer Login</p>
        <div className='flex flex-col'>
            <form className = "flex flex-col gap-2 max-w-sm" onSubmit={hazLoginEmail}>
                <input placeholder='Email'  className='border border-gray-500 rounded px-2 py-1 outline-none' type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input placeholder='Password'  className='border border-gray-500 rounded px-2 py-1 outline-none' type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button className='submit-button'>Ingresar</button>
            </form>
            <button onClick={hazLoginGoogle}>Login con google</button>  
        </div>      
            
    </div>
  )
}

export default Login
