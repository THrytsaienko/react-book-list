import React from 'react';
import BookItem from './BookItem';

const Books = (props) => (
    <tbody>
        {
            props.books.map((book, index) => {
                <tr>
                    <td key={index}>{book.title}</td>
                    <td key={index}>{book.author}</td>
                    <td key={index}>{book.isbn}</td>
                    <td><a href="#" className="delete">X</a></td>
                </tr>
                // <BookItem 
                //     key={index}
                //     bookTitle={book.title}
                //     bookAuthor={book.author}
                //     bookIsbn={book.isbn}
                // />
            })
        }
    </tbody>
);

export default Books;