import React, { useState } from 'react'
import "./loginscreenstyles.css"
import SignUpScreen from './SignUpScreen';


function LoginScreen() {

    const [signIn, setsignIn] = useState(false);


    return (
        <div className='loginscreen'>

            <div className='loginscreen_bg'>

                <img className="loginscreen_logo"
                    src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
                    alt="netflix-logo"
                />

                <button onDoubleClick={() => setsignIn(true)}
                    className='loginscreen_button'>
                    Sign In
                </button>

                <div className='loginscreen_gradient' />
            </div>


            <div className='loginscreen_body'>
                {signIn ? (<SignUpScreen />) : (
                    <>
                        <h1>Unlimited Movies,TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className='loginscreen_input'>
                            <form>
                                <input type="email" placeholder='Email Address' />
                                <button onClick={() => setsignIn(true)} className='loginscreen_getstarted'>Get Started</button>
                            </form>
                        </div>
                    </>
                )}</div>




        </div>
    )
}

export default LoginScreen