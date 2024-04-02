import React, { useContext } from 'react'; // Importa useContext
import { GiAlienFire } from 'react-icons/gi';
import { AppContext } from '../App';
import { getAuth, signOut } from "firebase/auth";
import toast from 'react-hot-toast';

const auth = getAuth();

const Header = () => {
  // Usa useContext para obtener el contexto
  const { setRoute, user, setUser} = useContext(AppContext);
  const hazLogout = () => {
    
    signOut(auth)
      .then(() => {
      // Sign-out successful.
        setRoute("login");
        setUser(null);
        toast("usuario ha hecho log out")
      }).catch((error) => {
        console.error(error)
      })
  }

  return (
    <header className='h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between px-8 fixed top-0'>
      <div className='flex items-center gap-2 cursor-pointer' onClick={() => setRoute('home')}>
        <GiAlienFire className='text-2xl text-pink-600' />
        <span className='text-xl font-semibold text-pink-600 '>FireShooping v3</span>
      </div>
      {user ? <button className='bg-lime-700 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition'
          onClick={hazLogout}>Log Out </button> : <div className='flex gap-2'>
        <button
          className='bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition'
          onClick={() => setRoute('login')}
        >
          Login
        </button>
        <button className='bg-lime-700 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition'
          onClick={() => setRoute('register')}>
          Registrate 
        </button>
      </div>}
      
    </header>
  );
};

export default Header;
