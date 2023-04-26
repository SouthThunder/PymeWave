import React, { Component } from"react";
import './Header.css'


export class Header extends React.Component{
    render(){
        return(
            <header>  
                <picture>
                    <img src="/images/Logos/PymeWaveSinFondo(white).png" alt="logo"/>
                </picture>
                <nav>
                    <div class="nav_box">
                        <ul>
                            <li>Services</li>
                            <li>Products</li>
                            <li><a href="/signIn">Sign In</a></li>
                            <li id="Sign_btns"><a href="/signUp">Sign Up</a> </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }

}