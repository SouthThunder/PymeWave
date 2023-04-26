import React, { Component } from"react";
import {Link} from 'react-router-dom';
import './Header.css'


export class Header extends React.Component{
    render(){
        return(
            <header>  
                <picture>
                    <img src="/images/Logos/PymeWaveSinFondo(white).png" alt="logo"/>
                </picture>
                <nav>
                    <div className="nav_box">
                        <ul>
                            <li>Services</li>
                            <li>Products</li>
                            <li><a href="/signIn">Sign In</a></li>
                            <li id="Sign_btns"><Link to={`/SingUp`}>Sign Up</Link> </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }

}