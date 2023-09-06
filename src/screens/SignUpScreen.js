import React, { useRef } from 'react'
import "./signupscreenstyles.css"
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function SignUpScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(
            auth, emailRef.current.value, passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message);
        });

    };

    const signUp = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            auth, emailRef.current.value, passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message);
        });

    }


    return (
        <div className='signupscreen'>
            <form className='form'>
                <h1 className='h1'>Sign Up</h1>
                <input ref={emailRef} className="input" placeholder=' Email' type='email' />
                <input ref={passwordRef} className="input" placeholder='Passwords' type='password' />
                <button className="signup_button" type='submit' onClick={signUp} >Sign Up </button>
                <h4 className='h4'>
                    <span className='grey'>New to Netflix ? </span>
                    <span className='link' onClick={register}>Create Account.</span>
                </h4>


            </form>
        </div>
    )
}

export default SignUpScreen