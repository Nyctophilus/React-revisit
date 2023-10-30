import { useState } from "react";
import styles from "./styles/Book.module.css";

const Book = ({
  id,
  img,
  title,
  auther,
  getBook,
  index,
}) => {
  const [ToggleTitle, setToggleTitle] = useState(false);
  const toggleTitle = () => setToggleTitle(!ToggleTitle);

  return (
    <article>
      <span># {index + 1}</span>
      <img src={img} alt={title} />
      <h2 onClick={toggleTitle}>
        {!ToggleTitle
          ? `${title.split(" ").slice(0, 5).join(" ")}`
          : title}
      </h2>
      <p>{auther}</p>
      <button onClick={() => getBook(id)}>
        Log the book!
      </button>
    </article>
  );
};
export default Book;
