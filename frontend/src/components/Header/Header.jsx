import React, { Component, useEffect, useState } from"react";
import {Link} from 'react-router-dom';
import './Header.css'


export const Header = (props) =>{
    const [state, setState] =useState(props.data);
    const [header, setHeader] = useState([]);
    useEffect(()=>{
        checkUser();
    }, [state])
    const checkUser= ()=>{
        if(props.data===undefined){
            console.log('start not user')
            console.log(state);
            setHeader(falseUser);
        }else{
            console.log('User logged at the moment');
            //console.log(props.data)
            setHeader(trueUser);
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