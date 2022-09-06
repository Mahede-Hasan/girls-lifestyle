import { faLongArrowRight, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    let activeStyle = {
        color: "white",
        fontSize: '22px',
        fontWeight: '700',
        border: '2px solid white',
        padding: "5px 5px",
        borderRadius: "4px"
    }
    return (
        <div className='header'>

            <AppBar position="static">
                <div className='headers'>
                    <div className='login-icon'>
                        <Button className='login-btn' color="inherit"> <FontAwesomeIcon icon={faRightFromBracket} /> Login</Button>
                    </div>
                    <div className='menu-bar'>
                        <NavLink className="nav" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } to="/home">Home</NavLink>
                        <NavLink className="nav" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } to="/review">Review</NavLink>
                        <NavLink className="nav" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } to="/about">About</NavLink>
                    </div>
                </div>

            </AppBar>


        </div>
    );
};

export default Header;