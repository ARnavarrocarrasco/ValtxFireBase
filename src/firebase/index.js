// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getMessaging, getToken} from "firebase/messaging"
import { getFirestore } from "firebase/firestore";

const vapidKey = "BNorIKqJklUarToLeeVictCQZY0kgI9V7gRbITPzX2EIXiQO4Gfjt43ljfTyxgZzFPkOFkpvHp4-KyIk0xYJ_IA";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiw-99Ey-2vnABMfF6wxX-EERXKcC0UZE",
  authDomain: "fire-shooping.firebaseapp.com",
  projectId: "fire-shooping",
  storageBucket: "fire-shooping.appspot.com",
  messagingSenderId: "512815606201",
  appId: "1:512815606201:web:470ba7432e36bc29866e68",
  measurementId: "G-JQV4D49G6V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const messaging = getMessaging(app);

getToken(messaging, {vapidKey}).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      sendTokenToServer(currentToken);
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });

const sendTokenToServer = token => {
  if (localStorage.getItem("tokenSentToServer")) return;
  //Implementar la lógica para almacenar el token en el servidor
  console.log("He almacenado el token")
  localStorage.setItem("tokenSentToServer", "1");
}

// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Service Worker registrado con éxito:', registration);
    })
    .catch((error) => {
      console.error('Error al registrar el Service Worker:', error);
    });
}

//Inicializar la base de datos Cloud Firestore
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);