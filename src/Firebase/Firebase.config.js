
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDozTXJlQ_WS6H7HGHGoacjqH4nViR6-c",
  authDomain: "social-events-assignment.firebaseapp.com",
  projectId: "social-events-assignment",
  storageBucket: "social-events-assignment.appspot.com",
  messagingSenderId: "1083759372758",
  appId: "1:1083759372758:web:3f3ecad2da2f267bd4dc77"
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);