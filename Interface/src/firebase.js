import firebase from 'firebase';

var config  = {
    apiKey: "AIzaSyBa97q4DWj7xsO4DWtFyEJQaSD4Cv-QcbA",
    authDomain: "testproj-81eb3.firebaseapp.com",
    databaseURL: "https://testproj-81eb3.firebaseio.com",
    projectId: "testproj-81eb3",
    storageBucket: "testproj-81eb3.appspot.com",
    messagingSenderId: "326625281759",
    appId: "1:326625281759:web:ece33af95da19ed8604b6a",
    measurementId: "G-X7JZG7KTP7"
  };

firebase.initializeApp(config);

export default firebase;