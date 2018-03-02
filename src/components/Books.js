import React from 'react';
import BookItem from './BookItem';

const Books = (props) => (
    <tbody>
        {
            props.books.map((book) => {
                <BookItem 
                    key={book}
                    bookTitle={book.title}
                    bookAuthor={book.author}
                    bookIsbn={book.isbn}
                />
            })
        }
    </tbody>
);

export default Books;