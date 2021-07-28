const firebase = require("./firebase");

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
  } else {
    console.log("error");
  }
});
