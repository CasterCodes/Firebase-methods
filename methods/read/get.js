const firebase = require("../../firebase");

// Method for querying a single time

firebase
  .firestore()
  .collection("posts")
  .get()
  .then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(data);
  });
