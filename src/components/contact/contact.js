import React, { useRef } from 'react';
import './contact.css';
import GithubIcon from '../../assets/github.png';
import LinkedInIcon from '../../assets/linkedin.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_sn3nnoj', 'template_cg1rmj4', form.current, 'ecQe80ce3ktB2AypH')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!');
            }, (error) => {
                console.log(error.text);
            });
    };
    var githubLink = 'https://github.com/wgvuong';
    var linkedinLink = 'https://www.linkedin.com/in/william-vuong-469182243/';
    var instagramLink = 'https://www.instagram.com/wgvuong/';
    function openLink(url) {
        window.open(url, '_blank');
    }
    return (
        <section id='contactPage'>
            <div id='contact'>
                <h1 className='contactPageTitle'>CONTACT ME</h1>
                <span className='contactDesc'>
                    Please fill out the form below to discuss any work opportunities.
                </span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder='Your Name' name='from_name'/>
                    <input type="email" className='email' placeholder='Your Email' name='from_email'/>
                    <textarea rows='5' placeholder='Your Message' className='msg' name='message'/>
                    <button className='submitBtn' type='submit' value='Send'>SUBMIT</button>
                    <div className='links'>
                        <img src={GithubIcon} alt='' className='link-github' onClick={() => openLink(githubLink)}/>
                        <img src={LinkedInIcon} alt='' className='link-linkedin' onClick={() => openLink(linkedinLink)}/>
                        <img src={InstagramIcon} alt='' className='link-instagram' onClick={() => openLink(instagramLink)}/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;