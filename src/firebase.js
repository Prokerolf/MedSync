import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Since it was deployed to medsync32.firebaseapp.com, we can use the default project ID
const firebaseConfig = {
  projectId: "medsync32",
  // Other configs will be auto-resolved by Firebase Hosting if deployed, 
  // but for local dev we might need the full config if we were doing auth locally.
  // We'll leave the minimal config here which often works for firestore if no rules block it,
  // or we can add the full config later if the user provides it.
  authDomain: "medsync32.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
