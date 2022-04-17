import React from 'react';
import './About.css';
import about from '../../images/about.png'

const About = () => {
    return (
        <div className='container'>
            <div className="row align-items-center my-5">
                <div className="col-md-6">
                    <img className='img-fluid' src={about} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="about-me">
                        <h1 style={{ fontSize: '50px' }} className='fw-bold mb-4'>About Me</h1>
                        <h3 className='mb-4 fs-2'>Hello There! I'm <br /><strong className='text-danger'> Abu Kawsar</strong></h3>
                        <p>
                            An aspiring MERN Stack Developer. I lost myself when I dive into the codes. I am a professional web designer and developer.</p>
                        <p>
                            Recently I have completed Html5, Css3, Javascript, Bootstrap, Jquery, React JS, Next JS, Node JS, Express JS, and Mongo DB react and node js from Programming Hero.
                        </p>
                        <p> I want to be a reasonable junior developer this year</p>
                        <button className="btn btn-danger" target="_blank" to=''>DOWNLOAD RESUME</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;