const functions = require('firebase-functions');
const admin = require('firebase-admin');
var express = require('express');
var app = express();






admin.initializeApp(functions.config().firebase);

let db = admin.firestore();

// Adds a message that welcomes new users into the chat.
exports.addWelcomeMessages = functions.auth.user().onCreate(async (user) => {
  console.log('A new user signed in for the first time.');
  const fullName = user.displayName || 'Anonymous';

admin.auth().getUser(uid)
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully fetched user data:', userRecord.toJSON());
  })
  .catch(function(error) {
    console.log('Error fetching user data:', error);
  });

})