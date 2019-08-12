import React from 'react';
import Logo from './img/logo-ALTA.png';
import Picture from './img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'
import './style.css'

function Home(){
    return (
        <div className="body">
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="header-logo">
                            <img src={Logo} alt=""></img>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="header-nav text-right">
                            <a className="page-now" href="#">HOME</a>
                            <a href="#">ABOUT</a>
                            <a href="#">EXPERIENCE</a>
                            <a href="#">CONTACT</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="container">
             <div className="row">
                 <div className="col-md-5">
                     <div className="profil-pic">
                         <img src={Picture} alt=""></img>                 
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="introduce">
                        <h5>Hi, my name is</h5>
                        <h1>Anne Sulivan</h1>
                        <h3>I build things for the web</h3>
                        <br></br>
                        <div>
                        <button type="button" className="btn btn-get btn-rounded">Get In Touch</button>        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    );

};

export default Home;