import React from 'react';

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

        console.log(title);
        console.log(author);
        console.log(isbn);

        // let arrBookInfo = [];
        // if(title){
        //     arrBookInfo.push(title);
        // }
        // if(author){
        //     arrBookInfo.push(author);
        // }
        // if(isbn){
        //     arrBookInfo.push(isbn);
        // }

        let arrBookInfo = {};
        arrBookInfo.title = title;
        arrBookInfo.author = author;
        arrBookInfo.isbn = isbn;

        console.log(arrBookInfo.author);
    
        // arrBookInfo.forEach(element => {
        //     console.log(element);
        // });

        const message = this.props.handleAddBook(arrBookInfo);
        console.log(message.text);

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