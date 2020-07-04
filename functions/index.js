const functions = require('firebase-functions');
const admin = require('firebase-admin');
const auth = require('firebase-auth');
var express = require('express');
var app = express();


admin.initializeApp(functions.config().firebase);

let db = admin.firestore();




 
  //aqui quiero tratar de hacer una funcion y llamarla
exports.addMessage = functions.https.onCall((data, context) => {
    //aqui quiero tratar de hacer una funcion y llamarla
  });

  exports.myFunction = functions.firestore
  .document('my-collection/{doc-id}')
  .onWrite((change, context) => { /* ... */ 
  });

  exports.useMultipleWildcards = functions.firestore
  .document('users/{userId}/{messageCollectionId}/{messageId}')
  .onCreate((change, context) => {
    // If we set `/users/marie/incoming_messages/134` to {body: "Hello"} then
    // context.params.userId == "marie";
    // context.params.messageCollectionId == "incoming_messages";
    // context.params.messageId == "134";
    // ... and ...
    // change.after.data() == {body: "Hello"}
  });




  function triggerNewDocument() {
    exports.createUser = functions.firestore
        .document('users/{userId}')
        .onCreate((snap, context) => {
          const newValue = snap.data();          
          const name = newValue.name;
        });
  }