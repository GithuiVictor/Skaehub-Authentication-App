import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import signIn from './components/authentication_pages/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/" exact component={signIn}/>
      </Switch>
    </Router>
  );
}

export default App;
