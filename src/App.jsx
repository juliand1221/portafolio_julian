import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Index from './pages/Principal';
import Curriculum from "./pages/cv"

import './styles/App.css';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/index">
            <Index />
          </Route>
          <Route path="/about">
            <Curriculum />
          </Route>
        </Switch>
      </Router>
    </div>
  
  );
}

export default App;
