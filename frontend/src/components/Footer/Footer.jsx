import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

export class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="left">
                    <p>© 2023 PymeWave, Inc</p>
                    <p><a href="">Terms</a></p>
                    <p><a href="">Privacy</a></p>
                    <p><Link to={`/AboutUs`} >What is PymeWave?</Link></p>
                </div>
                <div className="right">
                    <a href="https://www.facebook.com/" target="_blank"><img src="/images/Social-media/Facebook-icon.png" alt="Facebook"/></a>
                    <a href="https://twitter.com/?lang=es" target="_blank"><img src="/images/Social-media/Twitter-icon.png" alt="Twitter"/></a>
                    <a href="https://www.instagram.com/" target="_blank"><img src="/images/Social-media/Instagram-icon.png" alt="Instagram"/></a>
                    <a href="https://discord.com/" target="_blank"><img src="/images/Social-media/Discord-icon.png" alt="Discord"/></a>
                </div>
            </footer>
        );
    }
}