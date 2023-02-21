import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"

const Header = () => {
    return (
        <header className='showcase'>
            <div className='showcase-top'>
               <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='Netflix'/>
               <Link to="/sign" className='btn btn-rounded'>Sign In</Link>
                 </div>
                 <div className='showcase-content'>
                    <h1>Unlimited Movie,Tv Shows and More</h1>
                    <p>Watch Anywhere,Cancel Anytime</p>
                    <Link to="/movie" className='btn btn-xl'>Watch Free For 30 Days</Link>
                 </div>
        </header>
    );
}

export default Header;
