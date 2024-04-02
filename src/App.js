import { app, messaging } from './firebase';
import React, {useState, createContext} from 'react';
import Header from './components/Header';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import { Toaster, toast} from 'react-hot-toast';
import { onMessage } from 'firebase/messaging';
import Footer from './components/Footer';
import Shopping from './routes/Shopping';
import TaskList from './routes/TaskList';

export const AppContext = createContext(null);

onMessage(messaging, payload =>  {
  // console.log("Nueva notificación en directo ", payload);
  toast.custom( (t) => {
    <div
    className={`${
      t.visible ? 'animate-enter' : 'animate-leave'
    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className='bg-sky-300 p-4'>
        <h1 className='text-xl text-center text-violet-600'>{payload.notification.title}</h1>
        <p className='text-sm text-violet-950'>{payload.notification.body}</p>
      </div>
    </div>
  
  })
})

function App() {

  const [route, setRoute] = useState("home")
  const [user, setUser] = useState(null);
  return (
    <AppContext.Provider value={{route, setRoute, user, setUser}}> 
      <div>
        <Toaster/>
        <Header/>
        <main className={'text-3xl text-blue-600 px-6 pt-24 pb-20'}>
          {route === "home" && <Home/> }
          {route === "login" && <Login/>} 
          {route === "register" && <Register/>}
          {route === "shopping" && <Shopping/>} 
          {route === "taskList" && <TaskList/>} 
          {user && <p>Usuario ingresado: {user.email}</p> }
        </main>
        <Footer/>
      </div>
    </AppContext.Provider>
    
  );
}

export default App;
