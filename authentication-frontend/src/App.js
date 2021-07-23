import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import signIn from './components/authentication_pages/SignIn';
import SignUp from './components/authentication_pages/SignUp';
import profileDetails from './components/profile_pages/profileDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/" exact component={profileDetails}/>
        <Route to="/signUp" component={SignUp}/>
      </Switch>
    </Router>
  );
}

export default App;
