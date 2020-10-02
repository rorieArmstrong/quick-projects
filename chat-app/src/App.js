import React from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  	apiKey: "AIzaSyD6HXljIiAntXgoYXNi14ByAobcPYA1ijw",
    authDomain: "chat-app-19ff5.firebaseapp.com",
    databaseURL: "https://chat-app-19ff5.firebaseio.com",
    projectId: "chat-app-19ff5",
    storageBucket: "chat-app-19ff5.appspot.com",
    messagingSenderId: "199381947861",
    appId: "1:199381947861:web:4f83b207596ee9d8dc995c",
    measurementId: "G-CBXRLZ0WVY"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

const [user] =useAuthState(auth);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
	  <section>
		  {user? <ChatRoom auth={auth} firestore={firestore}/> : <SignIn auth={auth}/>}
	  </section>
    </div>
  );
}

export default App;
