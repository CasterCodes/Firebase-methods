const firebase = require("../../firebase");

// Using update method to update a specific document

firebase
  .firestore()
  .collection("posts")
  .doc("23457974934")
  .update({ title: "How to self improve" })
  .then(() => console.log("Document was updated successfully"))
  .catch((error) => console.log(error));
