importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBiw-99Ey-2vnABMfF6wxX-EERXKcC0UZE",
  authDomain: "fire-shooping.firebaseapp.com",
  projectId: "fire-shooping",
  storageBucket: "fire-shooping.appspot.com",
  messagingSenderId: "512815606201",
  appId: "1:512815606201:web:470ba7432e36bc29866e68",
  measurementId: "G-JQV4D49G6V"
});

const messaging = firebase.messaging();

// // Save a reference to self
// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     '[firebase-messaging-sw.js] Received background message ',
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = 'Mensaje de última hora!!';
//   const notificationOptions = {
//     body: 'Este es el body',
//     icon: 'https://cdn.dribbble.com/users/528264/screenshots/3140440/media/5f34fd1aa2ebfaf2cd548bafeb021c8f.png?resize=400x300&vertical=center'
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
