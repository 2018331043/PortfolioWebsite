import logo from './logo.svg';
import './App.css';
import React from "react"
import ProfilePic from "./images/profilepic.jpg"
import ProfilePic2 from "./images/profilepic2.jpg"
function Banner() {
  return (
    <>
    <section id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6"><img src={ProfilePic} className="rounded-circle"></img></div>
                    <div className="col-md-6">
                        <p className="promo-title">Hi, I am Mahnur Rahman,</p>
                        <p>A programmer, A Web/Mobile Developer, A student and An aspiring Computer Engineer.</p>
                    </div>
                </div>
            </div>
    </section>
    <section className="main-heading my-5">
        <div className="about-me text-center my-5">
            <h1>About Me</h1>
            <hr style={
                {
                    height:"1px",
                    background:"#000000",
                    opacity:".1"
                }
                } className="w-75 mx-auto "/>
        </div>
        <div className="about-me-card">
        <div className="card">
        
        <div class="row row-cols-2 about-me-row">
                    <div class="col">
                        <figure className="about-image-row">
                            <img src={ProfilePic2} className="about-image"></img>
                        </figure>
                    </div>
                    <div class="col">
                        
                        <p>
                        <h3 className="para-heading"><u>Life So Far</u></h3>
                            I am a student of CS department at sust. I am curently learning and working on web technologies such as Node.Js, ReactJs, MongoDB(As a Database). I hav worked with 
                            android Development in the past using Java ,Android Studio and Firebase. While working with android I created an app named I'm Fit which is a fitness tracker app that
                            can track fitness relateddata of an individual and more. Check out my works on my github profile linked below.  
                            <br/><br/><a href="https://github.com/2018331043" target=" "><button type="button" class="btn btn-outline-info">Github</button></a>
                        </p>

                    </div>
                </div>
        </div>
        </div>

        {/* testic card */}

        {/* <div className="container">
                <div class="row row-cols-2 about-me-row">
                    <div class="col">
                        <figure className="about-image-row">
                            <img src={ProfilePic2} className="about-image"></img>
                        </figure>
                    </div>
                    <div class="col">
                        
                        <p className="container">
                        <h3 className="para-heading"><u>Life So Far</u></h3> <br/>
                            I am a student of CS department at sust. I am curently learning and working on web technologies such as Node.Js, ReactJs, MongoDB(As a Database). I hav worked with 
                            android Development in the past using Java ,Android Studio and Firebase. While working with android I created an app named I'm Fit which is a fitness tracker app that
                            can track fitness relateddata of an individual and more. Check out my works on my github profile linked below.  
                            <br/><br/><a href="https://github.com/2018331043"><button type="button" class="btn btn-outline-info">Github</button></a>
                        </p>

                    </div>
                </div>
        </div> */}
    </section>
    </>
  );
}

export default Banner;
