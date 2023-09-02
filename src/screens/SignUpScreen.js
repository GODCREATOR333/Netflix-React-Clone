import React, { useRef } from 'react'
import "./signupscreenstyles.css"
//import { auth } from '../firebase'

function SignUpScreen() {

    // const emailRef = useRef(null)
    // const passwordRef = useRef(null)

    // const register = (e) => {
    //     e.preventDefault();

    //     auth.createUserWithEmailAndPassword(
    //         emailRef.current.value,
    //         passwordRef.current.value
    //     )
    //         .then((authUser) => {
    //             console.log(authUser);

    //         })
    //         .catch((error) => {
    //             console.log(error.message)
    //         });
    // };

    // const signIn = (e) => {
    //     e.preventDefault();
    // }


    return (
        <div className='signupscreen'>
            <form className='form'>
                <h1 className='h1'>Sign Up</h1>
                <input ref={emailRef} className="input" placeholder=' Email' type='email' />
                <input ref={passwordRef} className="input" placeholder='Passwords' type='password' />
                <button onClick={signIn} className="signup_button" type='submit'>Sign Up </button>
                <h4 className='h4'>
                    <span className='grey'>New to Netflix ? </span>
                    <span onClick={register} className='link'>Sign Up now.</span>
                </h4>


            </form>
        </div>
    )
}

export default SignUpScreen