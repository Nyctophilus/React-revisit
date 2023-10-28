import "./styles/App.css";
import BookAPI from "./BookAPI";
import Book from "./Book";

const App = () => (
  <>
    <h1 className="headLine">Amazon Best sellers!</h1>
    <section className="books">
      {BookAPI.map(({ img, title, auther }) => (
        <Book
          {...{ img, title, auther }}
          key={title + img}
        />
      ))}
    </section>
  </>
);
export default App;
