const firebase = require("../../firebase");

// for querying data both now and whenever it's updated in the future
// Note additionally that .onSnapshot() returns a function which we can use to unsubscribe and stop listening on a given collection.

firebase
  .firestore()
  .collection("posts")
  .onSnapshot((snap) => {
    const data = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(data);
  });

// React Example of subscribing and unsubscribing
// function App() {
//   const [books, setBooks] = React.useState([]);
//   React.useEffect(() => {
//     const unsubscribe = firebase
//       .firestore()
//       .collection("books")
//       .onSnapshot((snapshot) => {
//         const data = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setBooks(data);
//       });
//   }, []);
//   return books.map((book) => <BookList key={book.id} book={book} />);
// }
