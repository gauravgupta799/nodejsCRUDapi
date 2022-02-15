import Navbar from './components/Navbar'
import Home from './components/Home';
import SignUp from './components/Signup/SignUp';
import Login from './components/Login/Login';
import Logout from './components/Logout';
import {BrowserRouter as Router ,Route} from 'react-router-dom';

const  App = () => {
  return (
    <>
      <Router>
      <Navbar/>
          <Route exact path="/" component={Home} ></Route>
          <Route  path="/signup" component={SignUp}></Route> 
          <Route  path="/login" component={Login} ></Route>
          <Route  path="/logout" component={Logout} ></Route>
      </Router>
    </>
  )
}
export default App;