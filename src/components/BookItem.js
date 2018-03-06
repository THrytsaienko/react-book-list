import React from 'react';

const BookItem = (props) => (
    <tr>
        <td>{props.bookTitle}</td>
        <td>{props.bookAuthor}</td>
        <td>{props.bookIsbn}</td>
        <td><a href="#" className="delete">X</a></td>
    </tr>
)

export default BookItem;