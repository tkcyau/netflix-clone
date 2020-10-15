import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./app";
import { FirebaseContext } from "./context/firebase";

const config = {
  apiKey: "AIzaSyCUhGpUWBNKNkKxoLGLsRRn1Yn50Mn-zf4",
  authDomain: "netflixclone-933c9.firebaseapp.com",
  databaseURL: "https://netflixclone-933c9.firebaseio.com",
  projectId: "netflixclone-933c9",
  storageBucket: "netflixclone-933c9.appspot.com",
  messagingSenderId: "323999811697",
  appId: "1:323999811697:web:372086ecc65adcffa233d0",
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
