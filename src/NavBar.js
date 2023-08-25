import React, { useEffect, useState } from 'react'
import "./navbarstyles.css";


function NavBar() {

    const [show, handleShow] = useState(false)

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

                {/* <img className='navbar_logo'
                    src='https://i0.wp.com/www.downloadfonts.io/wp-content/uploads/2021/09/Netflix-Logo-Font.png?fit=1024%2C581&ssl=1'
                    alt='netflix logo' /> */}

                <img onScroll={transitionNavBar} className='navbar_logo_transparent '
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt='netflix logo transparent' />

                <img className='navbar_avatar'
                    src="https://loodibee.com/wp-content/uploads/Netflix-avatar-5.png"
                    alt="netflix avatar" />


            </div>
        </div>
    )
}

export default NavBar;


