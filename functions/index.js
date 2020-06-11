const functions = require('firebase-functions');
const admin = require('firebase-admin');
var express = require('express');
var app = express();






admin.initializeApp(functions.config().firebase);

let db = admin.firestore();




exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
    const email = user.email; 
    const displayName = user.displayName; 
      return sendWelcomeEmail(email, displayName);
  });
  