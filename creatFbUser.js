// createUser.js
const admin = require('./adminFb');

const newUser = {
  email: 'test4@example.com',
  emailVerified: false,
  password: 'secretPassword',
  displayName: 'John Doe',
  photoURL: 'https://www.example.com/12345678/photo.png',
  disabled: false,
};

async function createFirebaseUser(userData) {
  try {
    const userRecord = await admin.auth().createUser(userData);
    console.log('✅ User created:', userRecord.uid);
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

createFirebaseUser(newUser);