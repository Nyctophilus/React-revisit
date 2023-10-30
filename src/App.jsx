import "./styles/App.css";
import BookAPI from "./BookAPI";
import Book from "./Book";

const App = () => {
  const getBook = (id) => {
    const book = BookAPI.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <>
      <h1 className="headLine">Amazon Best sellers!</h1>
      <section className="books">
        {BookAPI.map(
          ({ id, img, title, auther }, index) => (
            <Book
              {...{
                id,
                img,
                title,
                auther,
                getBook,
                index,
              }}
              key={id + title + img}
            />
          )
        )}
      </section>
    </>
  );
};
export default App;
