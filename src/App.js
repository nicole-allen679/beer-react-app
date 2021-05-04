import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Beers from "./Components/Beers"
import { useState } from 'react';

function App() {
  const [name, setName] = useState('')
  return (
    <Router>
    <div className="App">
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      <header className="App-header">
      <h1>ALL THE BEST BEERS</h1> 
      </header>
      <Route path="/" component={Beers} />
    </div>
    </Router>
  );
}

export default App;
