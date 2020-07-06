const functions = require('firebase-functions');
const admin = require('firebase-admin');
const auth = require('firebase-auth');
var express = require('express');
var app = express();

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();

//recupera la información del usuario que esta logeado en este momento
var user = admin.auth();
let uid = user.uid; 
admin.auth().getUser(uid)
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully fetched user data:', userRecord.toJSON());
  })
  .catch(function(error) {
    console.log('Error fetching user data:', error);
  });

//crea un nuevo documento en firestore cuando se registra un nuevo usuario
//crea un nuevo documento en firestore cuando se registra un nuevo usuario
//crea un nuevo documento en firestore cuando se registra un nuevo usuario
//crea un nuevo documento en firestore cuando se registra un nuevo usuario
exports.createUser = functions.firestore
.document('users/{userId}')
.onCreate((snap, context) => {
  // Get an object representing the document
  // e.g. {'name': 'Marie', 'age': 66}
  const newValue = snap.data();

  // access a particular field as you would any JS property
  const name = newValue.name;

  // perform desired operations ...
});
//crea un nuevo documento en firestore cuando se registra un nuevo usuario
//crea un nuevo documento en firestore cuando se registra un nuevo usuario
//crea un nuevo documento en firestore cuando se registra un nuevo usuario
//crea un nuevo documento en firestore cuando se registra un nuevo usuario