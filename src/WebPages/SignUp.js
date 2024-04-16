
import React, { useState } from 'react';
import "../Components/Main.css";
 
const SignUp = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
       
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);
        
    };

    return (

        <>

            <div className="App">
                <form className="sign_form" onSubmit={handleSignUp}>

                <h1>Sign Up</h1>

                    <label className="sign_label">
                    First Name:
                    <input
                        className="sign_input"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    </label>
                    <br />
                    <label className="sign_label">
                    Last Name:
                    <input
                        className="sign_input"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    </label>
                    <br />
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

                    <hr/>
                    <p>By submitting this form you agree to our <a href="#">Terms 
                    & Privacy Policy</a>.</p>

                    <button className="sign_button" type="submit">Sign Up</button>
                </form>
                </div>

                </>
            );
            
              
            
        };
        
export default SignUp;