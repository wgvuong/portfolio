import React from 'react';
import './skills.css';
import Framework from '../../assets/framework.png';
import Languages from '../../assets/languages.png';
import SoftSkills from '../../assets/softskills.png';

const Skills = () => {
    return (
        <section id='skills'>
            <h1 className='skillTitle'>SKILLS.</h1>
            <span className='skillDesc'>
                I am a skilled and passionate web designer with experience in creating seamless,
                visually appealing, and user-friendly websites. My versatile skill set gives me a 
                strong understanding of design and a keen eye for detail.
            </span>
            <div className='about'>
                <div className='about-sec'>
                    <h4 className='about-title'>
                        <img src={Framework} alt='' className='about-img'></img>
                        FRAMEWORKS
                    </h4>
                    <div className='about-wrap'>
                        <span className='about-item'>Flask</span>
                        <span className='about-item'>React</span>
                        <span className='about-item'>NodeJS</span>
                        <span className='about-item'>Tailwind</span>
                        <span className='about-item'>Figma</span>
                        <span className='about-item'>GitHub</span>
                        <span className='about-item'>VSCode</span>
                        <span className='about-item'>MS Excel</span>
                    </div>
                </div>
                <div className='about-sec'>
                    <h4 className='about-title'>
                        <img src={Languages} alt='' className='about-img'></img>
                        LANGUAGES
                    </h4>
                    <div className='about-wrap'>
                        <span className='about-item'>HTML</span>
                        <span className='about-item'>CSS</span>
                        <span className='about-item'>Javascript</span>
                        <span className='about-item'>Python</span>
                        <span className='about-item'>C</span>
                        <span className='about-item'>C++</span>
                        <span className='about-item'>SQL</span>
                    </div>
                </div>
                <div className='about-sec'>
                    <h4 className='about-title'>
                        <img src={SoftSkills} alt='' className='about-img'></img>
                        SOFT SKILLS
                    </h4>
                    <div className='about-wrap'>
                        <span className='about-item'>Communication</span>
                        <span className='about-item'>Leadership</span>
                        <span className='about-item'>Organization</span>
                        <span className='about-item'>Problem Solving</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;