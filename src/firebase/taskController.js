//Se creara toda la lógica de BD para las task

//CRUD -> Create - Read - Update - Delete
import { db } from ".";
import { doc, collection, addDoc, getDocs, setDoc, deleteDoc } from "firebase/firestore";

export const addNewTask = async task => {
    await addDoc(collection(db, "task"), task);     
}

export const getTask = async () => {
    const querySnapshot = await getDocs(collection(db, "task"));
    // console.log(querySnapshot)

    // querySnapshot.forEach(doc => {
    //     console.log(doc.id, "=>", doc.data())
    // })

    const tasks = querySnapshot.docs.map(doc => {
        return{...doc.data(), id: doc.id};
    })

    // console.log(tasks)

    return tasks;
}

export const updateTask = async (task) => {
    // console.log(task)
    await setDoc(doc(db, "task", task.id), {
        title: task.title,
        description: task.title
    })
}

export const removeTask = async (id) => {
    await deleteDoc(doc(db, 'task', id))
}

