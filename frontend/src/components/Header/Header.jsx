import React, { Component, useEffect, useState } from"react";
import {Link} from 'react-router-dom';
import './Header.css'


export const Header = () =>{

    const getUser= localStorage.getItem('user');

    const [state, setState] =useState();
    const [header, setHeader] = useState(false);
    useEffect(()=>{
        checkUser();
    }, [])

    const checkUser= ()=>{
        if(getUser!=null){
            setHeader(trueUser)
        }else{
            setHeader(falseUser)
        }
    }

    const falseUser= ()=>{
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

    const logout = () =>{
        localStorage.clear();
        window.location.reload();
    }

    const trueUser= () =>{
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
                            <picture className="user_icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/552/552721.png" alt="user icon" />
                            </picture>
                            <button onClick={logout}>Test</button>
                        </ul>
                    </div>
                </nav>
            </div>        
        )
    }
         
        
        return(
            header       
        )
}