import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyCCfluXgePQ0NAmlHT-kRNGBBoljBp5ATE',
    authDomain: 'whatsapp-next-9e555.firebaseapp.com',
    projectId: 'whatsapp-next-9e555',
    storageBucket: 'whatsapp-next-9e555.appspot.com',
    messagingSenderId: '935257468935',
    appId: '1:935257468935:web:7b60e705d582db8f57baa2',
    measurementId: 'G-L4KV32F9R0'
}

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }