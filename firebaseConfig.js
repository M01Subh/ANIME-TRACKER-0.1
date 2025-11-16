import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8pNVD_p-zVHRIj0YsdJBOzv0UsCROGMw",
  authDomain: "anime-tracker-86a64.firebaseapp.com",
  projectId: "anime-tracker-86a64",
  storageBucket: "anime-tracker-86a64.appspot.com",
  messagingSenderId: "125524483156",
  appId: "1:125524483156:web:b51d6f8c20b6e4820ba1c1",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };