const firebase = require("../../firebase");

const user = {
  email: "kevin@gmail.com",
  password: "code123456code",
  name: "Kevin Caster",
};

firebase
  .auth()
  .createUserWithEmailAndPassword(user.email, user.password)
  .then((result) => {
    result.user.updateProfile({
      displayName: user.name,
    });
  })
  .then(() => console.log("Sucessfully signed in"))
  .catch((error) => console.log(error));
