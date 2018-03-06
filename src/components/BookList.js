import React from 'react';
import Header from './Header';
import AddBook from './AddBook';
import HeaderTable from './HeaderTable';
import Books from './Books';

export default class BookList extends React.Component {
    state = {
        books: []
    }
    handleAddBook = (arrBookInfo) => {
        if (Object.keys(arrBookInfo).length !== 3){
            return {
                text: 'Please fill in all fields!',
                className: 'error'
            }
        } else {
            this.setState((prevState) => {
                return {
                    books: prevState.books.concat(arrBookInfo)
                };
            });
            return {
                text: 'Book Added!',
                className: 'success'
            }
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('books');
            const books = JSON.parse(json);
            // console.log(json);
            // console.log(books);
            // console.log(books[0].title);

            if (books) {
                this.setState(() => ({ books }));
            }
        } catch (e) {
            // Do nothing at all
        }
        // console.log('componentDidMount');
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.books.length !== this.state.books.length) {
            const json = JSON.stringify(this.state.books);
            console.log("JSON" + json);
            localStorage.setItem('books', json);
        }
        console.log('componentDidUpdate');
    }
    render() {
        return (
            <div className="container">
                <Header />
                <AddBook 
                    handleAddBook={this.handleAddBook}
                />
                <table className="u-full-width">
                    <HeaderTable />
                    <Books 
                        books={this.state.books}
                    />
                </table>
            </div>
        );
    };
}

