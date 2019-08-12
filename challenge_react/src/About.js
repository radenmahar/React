import React from 'react';
import './style.css';
import header_logo from './img/logo-ALTA@2x.png';
import logo_alta from './img/logo-ALTA-v2.png';
import img_dot from './img/img-dot.png';
import mattew from './img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';
import fb from './img/ic_fb.png'
import twitter from './img/ic-twitter.png'
import instagram from './img/ic-instagram.png'
import linkedin from './img/ic-linkedin.png'

function About(){
    return(
        <div>
        <header>
        <div className="container toppage">
            <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="header-logo">
                            <a className="logo-navigasi pull-left" href="#">
                                <img src={header_logo} alt=""></img>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-8 topnav" id="myTopnav">
                        <div className="text-right wordtopright">
                                <ul>
                                    <a href="#">
                                        <li>
                                            HOME
                                        </li>
                                    </a>
                                    <a href="#">
                                        <li className="pageSekarang">
                                            ABOUT
                                        </li>
                                    </a>
                                    <a href="#">
                                        <li>
                                            EXPERIENCE
                                        </li>
                                    </a>
                                    <a href="#">
                                        <li>
                                            CONTACT
                                        </li>
                                    </a>
                                    <a href="#" className="icon" onclick="myFunction()"><i className="fa fa-bars"></i>
                                    </a>
                                </ul>
                        </div>
                    </div>
            </div>
            </div>
        </header>
        <div className="container-fluid">
        <div className="row aboutme align-items-center">
                <div className="container">
                    <div className="background2">
                        <h2>ABOUT ME.</h2>
                    </div>
                </div>
        </div>
    </div>
    <div className="container">
        <div className="row SettingRow3">
            <div className="col-md-7">
                <div className="content-paragraph">
                    <p>
                        Hello! I’m Anne Sullivan, a full-stack engineer based in Malang, IDN who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends. 
                    </p>
                    <p>
                        Shortly after graduating from Alterra Academy, I joined the engineering team at Alterra where I work on a wide variety of interesting and meaningful projects on a daily basis.
                    </p>                       
                    <p>Here’s few technologies 
                        I’ve been working with recently :
                    </p>
                    </div>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>HTML & CSS</td>
                                <td>Serverless</td>
                                <td>Scrum</td>
                            </tr>
                            <tr>
                                <td>Programming</td>
                                <td>Restful API</td>
                                <td>Test-Driven Dev</td>
                            </tr>
                            <tr>
                                <td>Database</td>
                                <td>Javascript</td>
                                <td>Software Testing</td>
                            </tr>
                            <tr>
                                <td>Git & Github</td>
                                <td>Single Page App</td>
                                <td>UI/UX Designer</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <div className="col-md-5">
                    <div className="imagePicture">
                                <img src={img_dot} className="img-fluid image1" alt="Responsive image"></img>
                                <img src={mattew} className="img-fluid image2" alt="Responsive image"></img>
                            </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    <footer>
        <div className="container-fluid alterrabawah">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <div className="AlterraBawah">
                        <img src={logo_alta} alt="..." class="Responsive image"></img>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="vl">
                        <div class="socialmedia">
                            <p>Social Media</p>
                            <img src={fb} alt="..." className="Responsive image"></img><img src={twitter} alt="..." className="Responsive image"></img><img src={instagram} alt="..." className="Responsive image"></img><img src={linkedin} alt="..." className="Responsive image"></img>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="verticaLine">
                        <div className="copyright">
                            Copyright @ 2019 Alterra
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
    )
}

export default About;