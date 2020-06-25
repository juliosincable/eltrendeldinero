const functions = require('firebase-functions');
const admin = require('firebase-admin');
const auth = require('firebase-auth');
var express = require('express');
var app = express();


const user = auth.user;
const uid = auth.uid;
const name = auth.name || null;
const email = auth.email || null;


admin.initializeApp(functions.config().firebase);

let db = admin.firestore();



exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  const email = user.email;
  return sendWelcomeEmail(email);
});