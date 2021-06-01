import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import NewsList from './Container/NewsList';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={NewsList}/>
        
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
