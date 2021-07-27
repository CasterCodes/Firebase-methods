const firebase = require("../../firebase");

// Add method generates automatic id for us

firebase
  .firestore()
  .collection("posts")
  .add({
    title: "How to use typeScript with react",
    body: "This is how to use typescript with react",
    author: "Kevin",
  })
  .then((ref) => console.log(ref.id));
