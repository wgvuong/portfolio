import React from 'react';
import {useState} from 'react';
import './works.css';
import Portfolio1 from '../../assets/dbpredictor.png'
import Portfolio2 from '../../assets/smiskify.png'
import Portfolio3 from '../../assets/clarity.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>PORTFOLIO.</h2>
            <span className='worksDesc'>
                Building skills comes with building projects. These are 
                some of the works that progressed my knowledge.
            </span>
            <div className='worksImgs'>
                <div className='card'>
                    <img src={Portfolio1} alt='' className='card-img'/>
                    <div className='card-body'>
                        <h1 className='card-title'>Diabetetes Risk Predictor</h1>
                        <p className='card-sub'>Python, Numpy, Pandas, Scikit-Learn, 
                                                Seaborn, Pickle, Flask, HTML, CSS </p>
                        <p className='card-desc'>A diabetes risk predictor application that 
                                                utilizes four binary classification models to 
                                                make predictions based on user inputted 
                                                lifestyle attributes.</p>
                        <button className='card-btn' onClick={() =>
                            window.open('https://github.com/wgvuong/diabetes-risk-pred', '_blank')
                        }>CODE</button>
                    </div>
                </div>
                <div className='card'>
                    <img src={Portfolio2} alt='' className='card-img'/>
                    <div className='card-body'>
                        <h1 className='card-title'>Spotify Data Visualizer</h1>
                        <p className='card-sub'>Python, HTML, CSS, Spotify API, Flask</p>
                        <p className='card-desc'>A web application that utilizes the Spotify 
                                                API to analyze a user's top songs of the last
                                                six months and a assign a personality based 
                                                Smiski that matches their music taste.</p>
                        <button className='card-btn' onClick={() =>
                            window.open('https://devpost.com/software/smiskify?ref_content=my-projects-tab&ref_feature=my_projects', '_blank')
                        }>CODE</button>
                    </div>
                </div>
                <div className='card'>
                    <img src={Portfolio3} alt='' className='card-img'/>
                    <div className='card-body'>
                        <h1 className='card-title'>Campus Gym Registration App</h1>
                        <p className='card-sub'>C, C++, Dart, Flutter, Back4App</p>
                        <p className='card-desc'>A full-stack application designed for the gym 
                                                that displays a real-time busy meter to estimate 
                                                gym capacity and provide QR member authentication.</p>
                        <button className='card-btn' onClick={() =>
                            window.open('https://devpost.com/software/clarity-mj8d16', '_blank')
                        }>CODE</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Works;