import firebase from 'firebase'
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAxOUg-i04Y_xfaNj3O6Cbe9YwQdodpXKA",
    authDomain: "facebookclone-d7841.firebaseapp.com",
    projectId: "facebookclone-d7841",
    storageBucket: "facebookclone-d7841.appspot.com",
    messagingSenderId: "824374286410",
    appId: "1:824374286410:web:0c490a9beb43701ecfeeb3",
    measurementId: "G-K007QR306X"
}

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
const storage = firebase.storage()

export {db, storage}