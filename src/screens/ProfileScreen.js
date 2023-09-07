import React from 'react'
import "./profilescreenstyles.css"
import NavBar from '../NavBar'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import { auth } from '../firebase'

function ProfileScreen() {
    const user = useSelector(selectUser);
    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                // Add any additional actions you want to perform after sign-out.
                // For example, you can redirect the user to the login screen.
            })
            .catch((error) => {
                console.error("Error signing out:", error);
            });
    };



    return (
        <div className='profilescreen'>
            <NavBar />
            <div className='profilescreen_body'>
                <h1>Edit Proifle</h1>

                <div className='profilescreen_info'>
                    <img className='avatar' src="https://loodibee.com/wp-content/uploads/Netflix-avatar-5.png" alt='profile-avatar' />
                    <div className='profilescreen_details'><h2> {user.email} </h2>
                        <div className='profilescreen_plans'>
                            <h3>Plans</h3>
                            <h4>Payment gateway implentation in process</h4>

                            <button onClick={handleSignOut} className='profilescreen_signout'>Sign Out</button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ProfileScreen