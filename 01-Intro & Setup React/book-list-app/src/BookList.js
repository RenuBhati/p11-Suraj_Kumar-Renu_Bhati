import React from "react";
import Book from "./Book";

const BookList = () => {
  const books = [
    { title: "Book 1", author: "Author 1", year: 2020 },
    { title: "Book 2", author: "Author 2", year: 2018 },
    { title: "Book 3", author: "Author 3", year: 2022 },
  ];

  return (
    <div>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <Book title={book.title} author={book.author} year={book.year} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
