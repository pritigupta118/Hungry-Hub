import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFqfMnuDiRzvg_WDBkm3TGMAEIoZCPilc",
  authDomain: "hungryhub-597c0.firebaseapp.com",
  projectId: "hungryhub-597c0",
  storageBucket: "hungryhub-597c0.appspot.com",
  messagingSenderId: "691236047089",
  appId: "1:691236047089:web:9433a0802ad7dc54508150",
  measurementId: "G-CM2YK1T5XV"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();