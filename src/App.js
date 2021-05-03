import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Beers from "./Components/Beers"
import SingleBeer from "./Components/SingleBeer"

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <p>THIS IS THE BEER</p>
      </header>
      <Route path="/" component={Beers} />
      {/* <Route path="/Beer" component={SingleBeer} /> */}
    </div>
    </Router>
  );
}

export default App;
