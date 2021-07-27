const firebase = require("../firebase");

firebase
  .firestore()
  .collection("users")
  .doc("user-id")
  .collection("posts")
  .add({})
  .then()
  .catch();

firebase
  .firestore()
  .collection("users")
  .doc("user-id")
  .collection("posts")
  .get()
  .then((snapshot) => {})
  .catch((error) => console.log(error));

// easy way to work with subcollections

firebase
  .firestore()
  .collection("users/user-id/books")
  .add({})
  .then((ref) => {
    ref.id;
  })
  .catch((error) => {});
