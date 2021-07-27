const firebase = require("../../firebase");

// we need to specify our own document id

// Using set will by default rewrite existing document with the same id

firebase
  .firestore()
  .collection("posts")
  .doc("23457974934")
  .set({
    title: "Self improvement",
    body: "The basic goals of self improvement is to set goals",
    author: "Priscilla Marembo",
  })
  .then(() => console.log("Document was created successfully"));

// Merging an old document with a new document by passing another parameter to the set method

firebase
  .firestore()
  .collection("posts")
  .doc("23457974934")
  .set({ title: "Heloo" }, { merge: true })
  .then(() => console.log("Document was merged"));
