import React from 'react';
import BookItem from './BookItem';

const Books = (props) => (
    <tbody>
        {
            props.books.map((book, index) => {
                // <tr key={index}>
                //     <td>{book.title}</td>
                //     <td>{book.author}</td>
                //     <td>{book.isbn}</td>
                //     <td><a href="#" className="delete">X</a></td>
                // </tr>
                <BookItem 
                    key={index}
                    bookTitle={book.title}
                    bookAuthor={book.author}
                    bookIsbn={book.isbn}
                />
            })
        }
    </tbody>
);

export default Books;