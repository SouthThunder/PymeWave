import React, { Component, useEffect, useState } from"react";
import {Link, parsePath} from 'react-router-dom';
import './Header.css'

export const HeadPopUp = (props) =>{

    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
      }

    return (
        <div>
            {
            !props.trigger && (
                <div className="popup-header">
                    <div className="popup-inner">
                        <Link to={props.follow}>Settings</Link>
                    </div>
                    <div className="popup-inner">
                        <button onClick={logout}>Log Out</button>
                    </div>
                </div>
                )
            }
        </div>
    )
}


export const Header = () =>{

    const getUser= localStorage.getItem('user');
    const getUserType=localStorage.getItem('user_type');

    const [popup, setPopup] =useState(true);
    const [header, setHeader] = useState(false);
    const [link, setLink] =useState();
    useEffect(()=>{
        checkUser();
    }, [popup])

    const checkUser= ()=>{
        if(getUser!==null){
            if(getUserType==='1'){
                setLink('/Empresa/ModificarDatos');
            }else{
                setLink('/Persona/ModificarDatos');
            }
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

    const togglePopup= () =>{
        setPopup(!popup);
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
                            <button onClick={togglePopup}>
                                <picture className="user_icon">
                                    <img src="https://cdn-icons-png.flaticon.com/512/552/552721.png" alt="user icon" />
                                </picture>
                            </button>
                            <HeadPopUp trigger={popup} follow={link}/>                            
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