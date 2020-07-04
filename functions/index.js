const functions = require('firebase-functions');
const admin = require('firebase-admin');
const auth = require('firebase-auth');
var express = require('express');
var app = express();


admin.initializeApp(functions.config().firebase);

let db = admin.firestore();


// aqui quiero escribir en la base de datos
let data = {
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA'
  };

  let setDoc = db.collection('cities').doc('LA').set(data);
// aqui quiero escribir en la base de datos


  //aqui quiero tratar de hacer una funcion y llamarla
exports.addMessage = functions.https.onCall((data, context) => {
    //aqui quiero tratar de hacer una funcion y llamarla
  });


//aqui quiero hacer un mensaje de bienvenida 
exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
const uid = auth.uid;
const name = auth.name || null;
const email = auth.email || null;
return sendWelcomeEmail(email);
});