import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH-PYuu7TV1d_AzO9jj-q27kX5uGC1gXU",
  authDomain: "dropbox-65e43.firebaseapp.com",
  projectId: "dropbox-65e43",
  storageBucket: "dropbox-65e43.appspot.com",
  messagingSenderId: "268231380197",
  appId: "1:268231380197:web:f3cf7771dc5d1ba56c180c",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
