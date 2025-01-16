/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBwiA9Vw_NwWWht9TpJPsQWuodismuwYmo",
  authDomain: "bus-travel-cc3c4.firebaseapp.com",
  projectId: "bus-travel-cc3c4",
  storageBucket: "bus-travel-cc3c4.appspot.com",
  messagingSenderId: "540794387292",
  appId: "1:540794387292:web:935904ac8fd9bd72d25f99"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);
  const notificationTitle = payload.notification.title || 'No body';
  const notificationOptions = {
    body: payload.notification.body || 'No body',
    icon: payload.notification,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
