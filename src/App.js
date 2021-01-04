import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './pages';
import SearchPage from './pages/search';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/search' component={SearchPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
