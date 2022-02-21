import Navbar from './components/Navbar'
import Home from './components/Home/Home';
import SignUp from './components/Signup/SignUp';
import Login from './components/Login/Login';
import Logout from './components/Logout';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import { useState } from 'react';

const  App = () => {

  const [user, setLoginUser] = useState({ })

  return (
    <>
      <Router>
      <Navbar/>
          <Route exact path="/">
          {  
            user && user._id ? <Home/> : <Login setLoginUser = {setLoginUser}/>
          }
          </Route>
          <Route  path="/signup" component={SignUp}></Route> 
          <Route  path="/login">
             <Login setLoginUser = {setLoginUser}/>
          </Route>
          <Route  path="/logout" component={Logout} ></Route>
      </Router>
    </>
  )
}
export default App;