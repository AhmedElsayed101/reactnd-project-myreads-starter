import React, {Component} from 'react'
import Book from './Book'

class Shelf extends Component {

    render (){

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.booksInShelf.map((book) => (
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

export default Shelf