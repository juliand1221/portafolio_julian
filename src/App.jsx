import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "styles/App.css"
import Index from 'pages/Principal';
import Curriculum from "pages/about"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/about">
            <Curriculum />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  
  );
}

export default App;
