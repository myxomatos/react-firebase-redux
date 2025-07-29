const admin = require('firebase-admin');
let serviceAccount = require('./react-her-firebase-adminsdk-txj0z-c2025da1e8.json');

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

admin.auth().createUser({
    email: 'test1@example.com',
    emailVerified: false,
    password: 'secretPassword',
    displayName: 'John Doe',
    photoURL: 'http://www.example.com/12345678/photo.png',
    disabled: false,
  })
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });