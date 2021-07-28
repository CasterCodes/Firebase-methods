const firebase = require("../../firebase");
const user = {
  email: "kevin@gmail.com",
  password: "code123456code",
  name: "Kevin Caster",
};

firebase
  .auth()
  .signInWithEmailAndPassword(user.email, user.password)
  .then((userCredential) => {
    console.log("signedin");
  })
  .catch((error) => console.log(error));
