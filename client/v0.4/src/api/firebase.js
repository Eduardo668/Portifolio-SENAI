import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxBJS2fqYYZC9fA42G9AUWxl0nCdjLMnE",
  authDomain: "portifolio-senai-images.firebaseapp.com",
  projectId: "portifolio-senai-images",
  storageBucket: "portifolio-senai-images.appspot.com",
  messagingSenderId: "996714632753",
  appId: "1:996714632753:web:07bfa966a063e307286710",
  measurementId: "G-59XR67DQV3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
