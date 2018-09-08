import firebase from 'firebase';
import 'firebase/auth/dist/index.cjs';

const config = {
    apiKey: "AIzaSyDGAnL_vCc7jS1xjvPUZw813nrFp2L8Uiw",
    authDomain: "fir-intgeration.firebaseapp.com",
    databaseURL: "https://fir-intgeration.firebaseio.com",
    projectId: "fir-intgeration",
    storageBucket: "fir-intgeration.appspot.com",
    messagingSenderId: "634022199959"
}
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const database = firebase.database().ref();
export {
    auth,
    database
};

