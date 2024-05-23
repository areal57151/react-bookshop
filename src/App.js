import { useState } from 'react';
import './App.css';
import { data } from './data';
import Books from './Books';
 


function App() {

  const [books, setBooks] = useState(data);
 
  
  return (<div>
      <Books itemsForSale={books}/> 
    
    </div>
  )
}

export default App;
