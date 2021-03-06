import React, {Component} from 'react'

class Book extends Component {

    
    onChangeShelf  = (value) => {
        this.props.changeShelf(this.props.book, value)
    }
    getCurrentShelf = () => {

        let currentShelf = this.props.book.shelf
        currentShelf = typeof (this.props.book.shelf) === "undefined" ? "none" : this.props.book.shelf 
        console.log(currentShelf)
        return currentShelf
    }

    render() {

        return(

            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover" 
                        style={{ width: 128, height: 193,
                                 backgroundSize: '100% 100%',
                                 backgroundImage: this.props.book.imageLinks  ? 
                                 'url(' + this.props.book.imageLinks.smallThumbnail + ')' :
                                 'none'
                              }}
                    ></div>
                    
                    <div className="book-shelf-changer">
                        
                        <select onChange= {(event) => this.onChangeShelf(event.target.value)} value = {this.getCurrentShelf()} >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )

    }
}

export default Book