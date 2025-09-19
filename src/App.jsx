import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <header>
        <h1>BookWormz</h1>
        <nav>
          <a href="#">Bookshelf</a>
          <a href="#">About</a>
          <a href="#">Profile</a>
        </nav>
      </header>

      <div className="container">
        <div className="header nav">
          <h2>My Bookshelf</h2>
          <div className="btnContainer">
            <button className="btns" id="addBook">Add Book</button>
            <button className="btns" id="removeBook">Remove Book</button>
          </div>
        </div>

        <div className="bookshelf" id="bookSpace">
          <form id="bookForm">
            <h1 className="form header info">Book Info</h1>

            <label htmlFor="book_name">Book Name</label> <br />
            <input type="text" id="book_name" placeholder="Super Cool Book" /> <br />

            <label htmlFor="author_name">Author Name</label> <br />
            <input type="text" id="author_name" placeholder="John Smith" /> <br />

            <h1 className="form header status">Completion Status</h1>

            <label htmlFor="total_pages">Total Amount of Pages</label> <br />
            <input type="number" id="total_pages" placeholder="999" /> <br />

            <fieldset>
              <legend>Current Reading Status</legend>

              <input type="radio" id="read" name="read_status" />
              <label htmlFor="read">Read</label> <br />

              <input type="radio" id="currently" name="read_status" />
              <label htmlFor="currently">Currently Reading</label> <br />

              <input type="radio" id="planning" name="read_status" />
              <label htmlFor="planning">Planning to Read</label> <br />

              <input type="radio" id="backlog" name="read_status" />
              <label htmlFor="backlog">Backlog</label>
            </fieldset>

            <br />

            <label className="readPages" htmlFor="read_pages">Pages Read</label> <br />
            <input className="readPages" type="number" id="read_pages" placeholder="123" />

            <div id="bottomBreak"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
