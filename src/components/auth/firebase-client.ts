import firebase from 'firebase'

const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER,
  appId: process.env.NEXT_PUBLIC_API_KEY,
}

const firebaseClient = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
}

export default firebaseClient
