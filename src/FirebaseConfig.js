// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase'
// Add the Firebase services that you want to use
import 'firebase/auth'
import 'firebase/firestore'
// TODO: Replace the following with your app’s Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDYkxxm964VCfhc3zJz2nEP-Juce_uysQk',
    authDomain: 'safe-home-797a8.firebaseapp.com',
    projectId: 'safe-home-797a8',
    storageBucket: 'safe-home-797a8.appspot.com',
    messagingSenderId: '969460104804',
    appId: '1:969460104804:web:34574d0c81d61b3c0e2971',
    measurementId: 'G-SC0B8ECL05',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const google = new firebase.auth.GoogleAuthProvider()
export const facebook = new firebase.auth.FacebookAuthProvider()
export const auth = firebase.auth()
export default firebase
