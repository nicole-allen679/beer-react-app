import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Beers from "./Components/Beers"

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <h1>ALL THE BEST BEERS</h1> 
      </header>
      <Route path="/" component={Beers} />
      {/* <Route path="/Beer" component={SingleBeer} /> */}
    </div>
    </Router>
  );
}

export default App;
