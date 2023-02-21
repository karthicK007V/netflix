import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    const[show,setshow]=useState(false);

    const NavbarVisibilty=()=>{
        if(window.scrollY>150){
            setshow(true)
        }else{
            setshow(false)
        }

    }
    useEffect(() => {
        window.addEventListener("scroll",NavbarVisibilty);
        return ()=>{
            window.removeEventListener("scroll",NavbarVisibilty)
        }
    
    }, [])
    return (
        <div className={`nav ${show && `nav-black`}`}>
            <Link to="/">
            <img className="nav-logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix"
            /></Link>
            <img className="nav-avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt='avathar'
            />
        </div>
    );
}

export default Navbar;
