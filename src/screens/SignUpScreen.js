import React from 'react'
import "./signupscreenstyles.css"

function SignUpScreen() {
    return (
        <div className='signupscreen'>
            <form className='form'>
                <h1 className='h1'>Sign Up</h1>
                <input className="input" placeholder=' Email' type='email' />
                <input className="input" placeholder='Passwords' type='password' />
                <button className="signup_button" type='submit'>Sign Up </button>
                <h4 className='h4'>
                    <span className='grey'>New to Netflix ? </span>
                    <span className='link'>Sign Up now.</span>
                </h4>


            </form>
        </div>
    )
}

export default SignUpScreen