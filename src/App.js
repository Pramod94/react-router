import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Category from './Components/Category';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>

      {/* When the browser location is matched with the Route path, "match" object is created.
      Which contains all the information about the location match */}

{/* 1) match.url: a string that returns the matched portion of the URL.
     This is particularly useful for building nested <Link> components.
    
    2) match.path: a string that returns the route’s path string — that is, <Route path="">.
     We’ll be using this to build nested <Route> components.

    3) match.isExact: a Boolean that returns true if the match was exact (without any trailing characters).

    4) match.params: an object containing key/value pairs from the URL parsed by the Path-to-RegExp package */}
    
    
    {/* With Switch, only the first child Route that matches the location gets rendered. */}
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/category"><Category /></Route>
      <Route path="/products"><Products /></Route>
    </Switch>
    </div>
  );
}

export default App;
