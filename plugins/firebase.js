import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAGxpYJU8RWn3J5_itiYIqDXStHzrmjWLw",
        authDomain: "realtime-chat-acb17.firebaseapp.com",
        databaseURL: "https://realtime-chat-acb17.firebaseio.com",
        projectId: "realtime-chat-acb17",
        storageBucket: "realtime-chat-acb17.appspot.com",
        messagingSenderId: "957350429583",
    })
}


export default firebase