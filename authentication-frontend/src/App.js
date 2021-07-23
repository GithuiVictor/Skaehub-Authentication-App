import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import signIn from './components/authentication_pages/SignIn';
import SignUp from './components/authentication_pages/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/" exact component={SignUp}/>
        <Route to="/signUp" component={SignUp}/>
      </Switch>
    </Router>
  );
}

export default App;
