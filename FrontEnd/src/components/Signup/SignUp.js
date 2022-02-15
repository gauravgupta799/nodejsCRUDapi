import React, {useState,useEffect} from 'react'
import axios from 'axios';
import './Signup.css'
import {Link} from 'react-router-dom';

const SignUp = () => {

  const [user, setUser]= useState({
    username: '',
    password: '',
    qualification: '',
    city: '',
    phone: '',

  })
  const handleChange = (e) => {
    // console.log(e.target)
    const {name,value} = e.target;
    setUser({...user, [name]:value})
    // console.log(user)
  }
  

   const handleFormSubmit = (e) => {
        e.preventDefault();
   }


   


  return (
    <div className=" my-5">
     {/* {console.log(user)} */}
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <h1 id ="signup">Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="email"><b>Username</b></label>
          <input type="text" placeholder="Enter username" name="username" vlaue ={user.username} onChange={handleChange}  />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handleChange}  />

          <label htmlFor="qualification"><b>Qualification</b></label>
          <input type="text" placeholder="Enter qualification" name="qualification" value={user.qualification} onChange={handleChange} />

          <label htmlFor="city"><b>City</b></label>
          <input type="text" placeholder="Enter your city" name="city" value={user.city} onChange={handleChange}/>

          <label htmlFor="phone"><b>Phone Number</b></label>
          <input type="tel" id="phone" name="phone" className= "mx-5"pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={user.phone} onChange={handleChange}/>
          
          <div className="clearfix">
            <button type="button" className="cancelbtn">Cancel</button>
            <button type="submit" className="signupbtn">Sign Up</button>
          </div>
          <div className="hint-text">Already have an account? <Link to ="/login">Login here</Link></div>
        </div>
      </form>
      </div>
  )
}

export default SignUp