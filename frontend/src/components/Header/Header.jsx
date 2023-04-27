import React, { Component } from"react";
import {Link} from 'react-router-dom';
import './Header.css'


export class Header extends React.Component{
    render(){
        return(
            <div className="header-component">  
                <picture>
                    <Link to={'/'}><img src="/images/Logos/PymeWaveSinFondo(white).png" alt="logo"/></Link>
                </picture>
                <nav>
                    <div className="nav_box">
                        <ul>
                            <li>Services</li>
                            <li>Products</li>
                            <li><Link to={'/SignIn'}>Sign In</Link></li>
                            <li id="Sign_btns"><Link to={`/SingUp`}>Sign Up</Link> </li>
                        </ul>
                    </div>
                </nav>
            </div>
            
        )
    }

}