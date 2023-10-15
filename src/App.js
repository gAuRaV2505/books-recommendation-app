import logo from './logo.svg';
import Logo from '../src/utils/undraw_coding_re_iv62.svg';
import './App.css';
import {useState, useEffect} from 'react';

const bks = {
    NonFiction: [{name: "How to win friends and Influence People",rating:"5/5"},{name: "Sapiens: A Brief History of HumanKind",rating:"4/5"}],
    Fiction: [{name: "The Alchemist",rating:"5/5"},{name: "The Great Gatsby",rating:"5/5"}],
    Novel: [{name: "Invisible Man",rating:"3/5"},{name: "The Old man and sea",rating:"5/5"}]
  };

function App() {

  const [books, setBooks] = useState([]);
  
  const genres = Object.keys(bks);
  
  function clickHandler(genre) {
    console.log(bks[genre]);
    setBooks(bks[genre]);
    
  }
  return (
    <div className="App">
      <div className='heading'>
        <img src={Logo} alt="" />
        <h1>goodBooks</h1>
      </div>
      <h3>Love Reading? Get started with some amazing Recomendation.Select any of the given Genre!</h3>
      <div className='recommend'>
        {
          genres.map((genre) => {
            return <button onClick={() => clickHandler(genre)} className='button'>{genre}</button>
          })
        }
      </div>
      <div className='output'>
        {
          books.map((book) => {
            return <div className='book-list'>
                       <h3 className='book-name'>Name: {book.name}</h3>
                       <h3 className='rating'>Rating: {book.rating}</h3>
                  </div>
          })
        } 
      </div>
    </div>
  );
}

export default App;
