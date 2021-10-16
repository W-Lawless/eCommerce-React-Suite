import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const fbConfig = {
    apiKey: "AIzaSyCB60aGlXjEKwb9_1p26smGMoYAcSM7K9Q",
    authDomain: "eshop-2a619.firebaseapp.com",
    projectId: "eshop-2a619",
    storageBucket: "eshop-2a619.appspot.com",
    messagingSenderId: "866528955283",
    appId: "1:866528955283:web:6acf08a92b9c213f94f666",
    measurementId: "G-X5NC5WLCSC"
}

firebase.initializeApp(fbConfig);

export const auth = firebase.auth()
export const fstore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (user, data) =>{
    if (!user) return;

    const userDocument = fstore.doc(`users/${user.uid}`)
    const DocumentSnapshot = await userDocument.get();

    if(!DocumentSnapshot.exists) {
        const { displayName, email} = user;
        const createdAt = new Date();

        try {

            await userDocument.set({
                displayName,
                email,
                createdAt,
                ...data
            })

        } catch (err) {
            console.log(err)
        }
    }

    return userDocument
    // console.log(
    //     fstore.doc('users/rRanOm')
    // )
}

export default firebase