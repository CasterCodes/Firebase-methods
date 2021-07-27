const firebase = require("../firebase");

// A list of useful firebase methods for firestore fields

//  Generating a time stamp of when a document was created

firebase
  .firestore()
  .collection("posts")
  .add({
    title: "Firebase firestore useful methods",
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  })
  .then(() => console.log("Document was created successfully"));

// Result for firebase.firestore.FieldValue.serverTimestamp()
// const result = {
//     id: 'j1zwYxM3hNwbp8nDNrrg',
//     title: 'Firebase firestore useful methods',
//     createdAt: Timestamp { seconds: 1627374024, nanoseconds: 111000000 }
//   },

// Increasing document count
firebase
  .firestore()
  .collection("posts")
  .add({
    title: "Firebase firestore useful methods",
    count: firebase.firestore.FieldValue.increament(1),
  })
  .then(() => console.log("Document was created successfully"));
