// Importe as funções necessárias dos SDKs necessários
import { initializeApp } from "firebase/app";
// TODO: Adicionar SDKs para produtos Firebase que você deseja usar
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, doc, getDocs, getFirestore, query, writeBatch } from 'firebase/firestore'
// Your web app's Firebase configuration
//Configuração do Firebase do seu aplicativo web
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN ,
  projectId: import.meta.env.VITE_PROJECT_ID ,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET ,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SANDER_ID ,
  appId: import.meta.env.VITE_APP_ID ,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const addCollentionAdDocuments = async (collentionKey, objectsToAdd) => {
  const collectionRef = collection(db, collentionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log("done")
}