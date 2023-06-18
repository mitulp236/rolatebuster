importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBD-xyKeD1v1ATXn66eW7rOdTxSgNZcJCA",
  authDomain: "rolatebuster.firebaseapp.com",
  projectId: "rolatebuster",
  storageBucket: "rolatebuster.appspot.com",
  messagingSenderId: "421548406876",
  appId: "1:421548406876:web:c7a1ff67d11f18d1074e99",
  measurementId: "G-VR7W03C6QJ"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});