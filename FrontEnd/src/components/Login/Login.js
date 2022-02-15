import React,{useState} from 'react'
import './Login.css';


const Login = () => {

  const [user, setUser]= useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    // console.log(e.target)
    const {name , value} = e.target
    setUser({...user, [name]:value})
    console.log(user)

  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
}

  return (
    <div className="container my-5 bg-secondary" >
       {/* {console.log(user)} */}
        <h1 id="login">Login</h1>
        <form onSubmit={handleFormSubmit}>
        <div className="row my-4">
          <div className="col">
            <div>
              <a href="#" className="fb btn my-2">
              <i className="fa fa-facebook fa-fw"></i> Login with Facebook
              </a>
            </div>
            <div>
                <a href="#" className="twitter btn my-2">
                <i className="fa fa-twitter fa-fw"></i> Login with Twitter
                </a>
            </div>
          <div>
            <a href="#" className="google btn my-2">
            <i className="fa fa-google fa-fw"></i> Login with Google+
            </a>
          </div>
          <div className="v1"></div>
          </div>
            <div className="col">
            <div className="hide-md-lg">
            <p>Or sign in manually:</p>
            </div>
                <input type="text" name="username" placeholder="Username" value = {user.username} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value = {user.password} onChange={handleChange} required />
                <input type="submit" id="submit" defaultValue="Login" />
              </div>
            </div>
        </form> 
    </div>
  )}


export default Login;




