// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getMessaging, getToken} from "firebase/messaging"
import { getFirestore } from "firebase/firestore";


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

const devfirebaseConfig = {
  apiKey: "AIzaSyCfIlLV9J3_3WNHApn0Hf5nHoVn627tIAI",
  authDomain: "dev-firebase-shopping-d95a6.firebaseapp.com",
  projectId: "dev-firebase-shopping-d95a6",
  storageBucket: "dev-firebase-shopping-d95a6.appspot.com",
  messagingSenderId: "364346397748",
  appId: "1:364346397748:web:51c0fd4ab67d44732ba661"
}

// Initialize Firebase
let app;
if(process.env.NODE_ENV === "production") {
  app = initializeApp(firebaseConfig);
} else {
  app = initializeApp(devfirebaseConfig);
}

export {app}

const vapidKeyProd = "BNorIKqJklUarToLeeVictCQZY0kgI9V7gRbITPzX2EIXiQO4Gfjt43ljfTyxgZzFPkOFkpvHp4-KyIk0xYJ_IA";
const vapidKeyDev = "BNUNXc6cEsEeo2LW28hGVmT5q9l8esrgaGeTEgY5gg82hVmyMewDQwv2qkY0MFxa3DP1Csa37GM-5ChDaMFJFBc";
export const messaging = getMessaging(app);

getToken(messaging, {vapidKey: process.env.NODE_ENV === "production" ? vapidKeyProd : vapidKeyDev}).then((currentToken) => {
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