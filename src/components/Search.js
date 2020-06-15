import React, {Component} from 'react'
import Book from './Book'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'


class Search extends Component {

    state = {
        query : '',
        books : []
    }
    

    search = (query) => {
        return BooksAPI.search(query)
        .then(books => Array.isArray(books) ? books : [])
    }


    handleChange = (query) => {
        this.setState(() => ({
            query : query,    
        }))
        // console.log(this.state.books)
        if(query.length) 
            this.search(query)
            .then(books => this.setState({books: books}))
        else 
            this.setState({books: []})
    }

    render () {

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to = '/' 
                    >
                        <button className="close-search" >Close</button>
                    </Link>
                
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text"
                            placeholder="Search by title or author"  
                            value = {this.state.query} 
                            onChange = {(event) => {this.handleChange(event.target.value)}}/>
                    </div>

                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        
                        {this.state.books.map((book) => (
                            <li key = {book.id}>
                                <Book 
                                    book = {book}
                                    changeShelf = {this.props.changeShelf}
                                />
                            </li>
                        ))}

                    </ol>  
                </div>
            </div>
            
        )
    }
}
export default Search

