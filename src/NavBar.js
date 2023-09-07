import React, { useEffect, useState } from 'react'
import "./navbarstyles.css";
import { useNavigate } from 'react-router-dom'


function NavBar() {

    const [show, handleShow] = useState(false)
    const navigate = useNavigate();

    function transitionNavBar(event) {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);


    return (
        <div className={(`navbar ${show && "navbar_black"}`)}>
            <div className='navbar_content'>

                <img onScroll={transitionNavBar} className='navbar_logo_transparent '
                    src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
                    alt='netflix logo transparent' />

                <img
                    onClick={() => navigate("/profile")}
                    className='navbar_avatar'
                    src="https://loodibee.com/wp-content/uploads/Netflix-avatar-5.png"
                    alt="netflix avatar" />


            </div>
        </div>
    )
}

export default NavBar;


