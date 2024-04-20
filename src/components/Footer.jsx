import React, {useContext} from 'react'
import { IoIosHome } from "react-icons/io";
import { BsFillCartFill, BsList} from 'react-icons/bs';
import { AppContext } from '../App';

const Footer = () => {
    const {setRoute} = useContext(AppContext);
    return (
        <footer className='fixed h-10 w-full bg-sky-500 bottom-0 flex justify-evenly 
        items-center'>
            <div className='bg-sky-200 p-2 text-xl rounded-full
            text-pink-500 cursor-pointer hover:bg-sky-50 transition' onClick={() => setRoute('home')}>
                <IoIosHome/>
            </div>
            <div className='bg-sky-200 p-2 text-xl rounded-full
            text-pink-500 cursor-pointer hover:bg-sky-50 transition' onClick={() => setRoute('shopping')}>
                <BsFillCartFill/>
            </div>
            <div className='task-list' onClick={() => setRoute('taskList')}>
                <BsList/>
            </div>
        </footer>
    )
}

export default Footer
