import admin from 'firebase-admin'
import serviceAccount from 'secret.json'

export const verifyIdToken = (token: string) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
      databaseURL: 'https://sapo-finance-v1.firebaseio.com',
    })
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error
    })
}
