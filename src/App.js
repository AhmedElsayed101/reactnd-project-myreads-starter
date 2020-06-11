import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import Search from './components/Search'
import Shelves from './components/Shelves'


class BooksApp extends React.Component {
  state = {
    books : [] 
  }

  getAllBooks = () => BooksAPI.getAll()
    .then(books => this.setState({books}))
  
  changeShelf = (book, shelf) => BooksAPI.update(book, shelf)
    .then(books => this.getAllBooks())

  componentDidMount() {
    return this.getAllBooks()
  }

  render() {
    return (
      <div className="app">
        <Route
          path="/" exact
          render={() => (
            <Shelves
              books = {this.state.books}
              changeShelf = {(book, shelf) => this.changeShelf(book, shelf)}
            />
          )}
        />
         <Route 
          path="/search"
          render={() => (
            <Search
              books = {this.state.books}
              changeShelf = {(book, shelf) => this.changeShelf(book, shelf)}
            />
          )}
        />
     
      </div>
    )
  }
}

export default BooksApp
