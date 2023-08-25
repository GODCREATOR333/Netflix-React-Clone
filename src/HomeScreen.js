import React from 'react';
import "./homescreenstyles.css";
import NavBar from './NavBar';
import Banner from './Banner';



function HomeScreen() {
    return (
        <div className='homescreenstyles'>
            <NavBar />

            <Banner />

        </div>
    );
}

export default HomeScreen;