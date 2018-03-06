import React from 'react';
import { v4 } from 'uuid';

export default class AddBook extends React.Component {
    state = {
        messageText: undefined,
        messageClass: undefined
    };
    handleAddBook = (e) => {
        e.preventDefault();
        const title = e.target.elements.title.value.trim();
        const author = e.target.elements.author.value.trim();
        const isbn = e.target.elements.isbn.value.trim();
        const id = v4();

        console.log(title);
        console.log(author);
        console.log(isbn);

        const message = this.props.handleAddBook({title, author, isbn, id});
        console.log(`message ${message.text}`);

        this.setState(() => ({
            messageText: message.text,
            messageClass: message.className
        }));
        if (message.className === 'success') {
            e.target.elements.title.value = '';
            e.target.elements.author.value = '';
            e.target.elements.isbn.value = '';
        };
        this.changeState(this);
    };
    changeState (that) {
        setTimeout(function () {
            that.setState(() => ({
                messageText: undefined,
                messageClass: undefined
            }));
        }, 3000);
    };
    render(){
        return(
            <form id="book-form" onSubmit={this.handleAddBook}>
                {(this.state.messageText && this.state.messageClass) && <p className={this.state.messageClass}>{this.state.messageText}</p>}
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" className="u-full-width" />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" className="u-full-width" />
                </div>
                <div>
                    <label htmlFor="isbn">ISBN#</label>
                    <input type="text" id="isbn" className="u-full-width" />
                </div>
                <div>
                    <input type="submit" value="Submit" className="u-full-width" />
                </div>
            </form>
        );
    }
}