import firebase from 'firebase';
import 'firebase/auth/dist/index.cjs';

const config = {
    apiKey: "AIzaSyB9nwMfWMjSNFPEAm21I3H1FQv5vN-tHPI",
    authDomain: "testproject-497b2.firebaseapp.com",
    databaseURL: "https://testproject-497b2.firebaseio.com",
    projectId: "testproject-497b2",
    storageBucket: "testproject-497b2.appspot.com",
    messagingSenderId: "956386037705"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};

