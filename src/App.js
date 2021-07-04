import './App.css';
import { Route, Link } from 'react-router-dom';
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
      <Route exact path="/"><Home /></Route>
      <Route exact path="/category"><Category /></Route>
      <Route exact path="/products"><Products /></Route>
    </div>
  );
}

export default App;
