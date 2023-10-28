import { useState } from "react";
import styles from "./styles/Book.module.css";

const Book = ({ img, title, auther }) => {
  const [ToggleTitle, setToggleTitle] = useState(false);
  const toggleTitle = () => setToggleTitle(!ToggleTitle);

  return (
    <article>
      <img src={img} alt={title} />
      <h2 onClick={toggleTitle}>
        {!ToggleTitle
          ? `${title.split(" ").slice(0, 5).join(" ")}`
          : title}
      </h2>
      <p>{auther}</p>
    </article>
  );
};
export default Book;
