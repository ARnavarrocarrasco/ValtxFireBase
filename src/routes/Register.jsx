import React, { useState, useContext } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import toast from 'react-hot-toast';
import { AppContext } from '../App';

const auth = getAuth();

const Register = ()  => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setRoute, setUser} = useContext(AppContext)

    const crearUsuario = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            console.log(user)
            toast(`¡Usuario ${email} registrado con éxito`)
            // setEmail("");
            // setPassword("");
            setUser(user)
            setRoute("home");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode, errorMessage)
        });
    }
    const hadleSubmit = e => {
        e.preventDefault(); 
        crearUsuario();
    }
    return (
        <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-sky-700 font-semibold text-center'>Registrate para tener acceso a la mejor App del Mundo</h1>
            <form className = "flex flex-col gap-2 max-w-sm" onSubmit={hadleSubmit}>
                <input placeholder='Email' className='border border-gray-500 rounded px-2 py-1 outline-none' type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input placeholder='Password' className='border border-gray-500 rounded px-2 py-1 outline-none' type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button className='submit-button'>Aceptar</button>
            </form>
        </div>
    )
}

export default Register
