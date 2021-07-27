const firebase = require("../../firebase");

firebase
  .firestore()
  .collection("posts")
  .doc("U6aGauExAdsZkoau2cRM")
  .delete()
  .then(() => console.log("Document deleted success"))
  .catch((error) => console.log(error));
