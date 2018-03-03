import React from 'react';

const BookItem = (props) => (
    <tr>
        <td key={props.key}>{props.bookTitle}</td>
        <td key={props.key}>{props.bookAuthor}</td>
        <td key={props.key}>{props.bookIsbn}</td>
        <td><a href="#" className="delete">X</a></td>
    </tr>
)

export default BookItem;