import React from 'react'
import "./loginscreenstyles.css"

function LoginScreen() {
    return (
        <div className='loginscreen'>
            <div className='loginscreen_bg'>
                <img className="loginscreen_logo" src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="netflix-logo" />
                <button className='loginscreen_button'> Sign In </button></div>


            <div className='loginscreen_gradient'> </div>

            <div className='loginscreen_body'>
                <>
                    <h1>Unlimited Movies,TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                </>
                <div className='loginscreen_input'>
                    <form>
                        <input type="email" placeholder='Email Address' />
                        <button className='loginscreen_getstarted'>Get Started</button>
                    </form>
                </div>

            </div>





        </div>
    )
}

export default LoginScreen