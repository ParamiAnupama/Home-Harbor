import React, { useState } from 'react';
import "../Components/Main.css";
 
const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignIn = (e) => {
      e.preventDefault();
      
      console.log('Email:', email);
      console.log('Password:', password);
      
    };
  

    return (
        <div className="App">
            
      <form  className="sign_form" onSubmit={handleSignIn}>

      <h1>Sign in</h1>

        <label className="sign_label">
          Email:
          <input
            className="sign_input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label className="sign_label">
          Password:
          <input
            className="sign_input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button className="sign_button" type="submit">Sign In</button>
      </form>
    </div>
  );
};

 
export default SignIn;