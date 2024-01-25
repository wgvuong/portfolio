import React, {useEffect} from 'react';
import gsap from 'gsap';
import SplitTextJS from 'split-text-js';
import './intro.css';
import bg from '../../assets/portpic.jpg';
import btnImg from '../../assets/resumeicon.png'

const Intro = () => {
    useEffect(() => {
        const titles = gsap.utils.toArray('.introPos-item');
        const tlx = gsap.timeline({repeat:-1, repeatDelay:0.1});

        titles.forEach(title => {
            const splitTitle = new SplitTextJS(title);
            tlx.from(
                splitTitle.chars, {
                    opacity: 0,
                    y: 20,
                    rotateX: -90,
                    stagger: .02,
                }, '<'
            );
            tlx.to(
                splitTitle.chars, {
                    opacity: 0,
                    y: -20,
                    rotateX: 90,
                    stagger: .02,
                }, '<1'
            );
        });
    }, []);
    return (
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>HELLO,</span>
                <span className='introText'>
                    I'M
                    <span className='introName'><strong> WILLIAM.</strong></span><br />
                    <div className='introPos'>
                        <div className='introPos-wrap'>
                            <p className='introPos-item'>CS UNDERGRADUATE</p>
                            <p className='introPos-item'>FRONTENDER</p>
                            <p className='introPos-item'>UI DESIGNER</p>
                            <p className='introPos-item'>WEB DEVELOPER</p>
                        </div>
                    </div>
                </span>
                <p className='introPara'>I AM AN UNDERGRADUATE AT UC DAVIS MAJORING IN <br /> 
                                    COMPUTER SCIENCE. I HAVE EXPERIENCE IN FULL STACK <br /> 
                                    DEVELOPMENT, AND I'M INTERESTED IN WORKING WITH <br /> 
                                    MACHINE LEARNING AND WEB DEVELOPMENT.</p>
                <button className='btn'>
                    <img src={btnImg} alt="RESUME" className='btnImg'></img>
                        <a href={require('../../assets/Resume2023.pdf')} download='William_Vuong_Resume' className='dlink'>
                            RESUME
                        </a>
                </button>
            </div>
            <div className='wrapper'>
                <img src={bg} alt='' className='bg' />
            </div>
        </section>
    )
}

export default Intro