import React from 'react';
import Header from './Header';
import AddBook from './AddBook';
import HeaderTable from './HeaderTable';
import Books from './Books';

export default class BookList extends React.Component {
    state = {
        books: [
            {
                title: undefined,
                author: undefined,
                isbn: undefined
            }
        ]
    }
    // state = {
    //     books: [{}]
    // }
    handleAddBook = (arrBookInfo) => {
        // console.log(arrBookInfo[0]);
        // const bookss = [
        //     {
        //         title: undefined,
        //         author: undefined,
        //         isbn: undefined
        //     }
        // ];
        // console.log(bookss);
        // let newArr = bookss.concat(arrBookInfo);
        // console.log(newArr);
        // console.log(arrBookInfo.title);
        // const size = Object.keys(arrBookInfo).length;
        // console.log(size);
        if (Object.keys(arrBookInfo).length !== 3){
            return {
                text: 'Please fill in all fields!',
                className: 'error'
            }
        } else {
            return {
                text: 'Book Added!',
                className: 'success'
            }
        }

        this.setState((prevState) => ({ books: prevState.books.concat({arrBookInfo}) }));
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('books');
            const books = JSON.parse(json);

            if (books) {
                this.setState(() => ({ books }));
            }
        } catch (e) {
            // Do nothing at all
        }
        console.log('componentDidMount');
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.books.length !== this.state.books.length) {
            const json = JSON.stringify(this.state.books);
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

