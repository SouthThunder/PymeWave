import React from "react";
import './Footer.css'

export class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="left">
                    <p>© 2023 PymeWave, Inc</p>
                    <p><a href="">Terms</a></p>
                    <p><a href="">Privacy</a></p>
                    <p><a href="Pymewave.html">What is PymeWave?</a></p>
                </div>
                <div className="right">
                    <a href="https://www.facebook.com/"><img src="/images/Social-media/Facebook-icon.png" alt="Facebook"/></a>
                    <a href="https://twitter.com/?lang=es"><img src="/images/Social-media/Twitter-icon.png" alt="Twitter"/></a>
                    <a href="https://www.instagram.com/"><img src="/images/Social-media/Instagram-icon.png" alt="Instagram"/></a>
                    <a href="https://discord.com/"><img src="/images/Social-media/Discord-icon.png" alt="Discord"/></a>
                </div>
            </footer>
        );
    }
}