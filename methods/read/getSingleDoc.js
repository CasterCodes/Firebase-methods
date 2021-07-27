const firebase = require("../../firebase");

firebase
  .firestore()
  .collection("posts")
  .doc("jdQv6cLiFzL2mdXLGFwu")
  .get()
  .then((doc) => {
    if (!doc.exists) {
      console.log("error document is not found");
    }
    console.log(doc.data());
  });
