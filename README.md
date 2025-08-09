## React-firebase-redux

Please follow next steps to use this React-Redux project integrated with Firebase Authentication & Firestore

1. To use this project please navigate to src/firebase/conf.js and use you Firebase project properties.
2. Activate Authentication Email/Password & Google Sign-in (Firebase Console)
3. Activate Firestore (Firebase Console)
4. In the src/firebase/providers.js, replace line 2 with this **`import { FirebaseAuth } from './conf';`**