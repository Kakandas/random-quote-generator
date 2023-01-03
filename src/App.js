import { useState} from 'react';
import Tumblr from './tumblr.svg';
import Twitter from './twitter.svg';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([])
  
  

  const newQuote = () => {
       fetch('https://api.quotable.io/random')
       .then(response => response.json())
       .then(data => setQuotes(data));
  }

  return (
    <div className="quote-box">
      <div id='quotes'>
        <p id='text'>{quotes.content}</p>
        <p id="author">-{quotes.author}</p>
      </div>
      <div id='buttons'>
        <div id='social-media'>
          <a href='https://twitter.com/intent/tweet' target='_blank' rel='noreferrer'><img src={Twitter} alt='Twitter'></img></a>
          <a href='https://tumblr.com' target='_blank' rel='noreferrer'><img src={Tumblr} alt='Tumblr'></img></a>
        </div>
        <div id='new-quote' onClick={() => {newQuote()}}>
              <p>New Quote</p>
        </div>
      </div>
    </div>
  );
}

export default App;
