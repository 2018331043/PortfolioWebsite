import logo from './logo.svg';
import './App.css';
import React from "react"
import ProfilePic from "./images/profilepic.jpg"

function Banner() {
  return (
    <>
    <section id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6"><img src={ProfilePic} className="rounded-circle"></img></div>
                    <div className="col-md-6">
                        <p className="promo-title">Hi, My name is Mahnur Rahman.</p>
                        <p>I am an undergrad CS student at SUST. I love to solve problems and try to come up with ideas to solve socio-economical problem through tech</p>
                    </div>
                </div>
            </div>
    </section>
    </>
  );
}

export default Banner;
