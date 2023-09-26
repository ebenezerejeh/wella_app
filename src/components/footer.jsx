import React from 'react'
import logo from '../images/Logo.png'
import twitter_icon from '../images/teenyicons_twitter-outline.svg'
import instagram_icon from '../images/line-md_instagram.svg'
import inlinkedin_icon from '../images/jam_linkedin-square.svg'
import facebook_icon from '../images/ph_facebook-logo-bold.svg'

const footer = () => {
  return (
    <>
        <footer className="footer_main">

        <div className="footer_innerContainer">

            <div className="footer_image"><img src={logo} alt="footer_logo"/></div>
            <div className="footer_Offerings">
                <p className="footer_header_text">offerings</p>
                <p className="footer_txt">Services</p>
                <p className="footer_txt">Healthy Meals</p>
                <p className="footer_txt">Calorie Counter</p>

            </div>
            <div className="footer_Company">
                <p className="footer_header_text">company</p>
                <p className="footer_txt">About Us</p>
                <p className="footer_txt">Team</p>
                <p className="footer_txt">Contact Us</p>
                <p className="footer_txt">FAQ's</p>
                <p className="footer_txt">Careers</p>
            </div>

            <div className="footer_GetInTouch">
                <div className="footer_header_text"><p className="footer_header_text p1">Get in touch</p></div>
                <div className="footer_txt"><span className="img1"><img src={twitter_icon}/></span><p className="p1">Twitter</p></div>
                <div className="footer_txt"><span className="img1 img2"><img src={instagram_icon}/></span><p className="p1">Instagram</p></div>
                <div className="footer_txt"><span className="img1 img2"><img src={inlinkedin_icon}/></span><p className="p1">LinkedIn</p></div>
                <div className="footer_txt"><span className="img1 img2"><img src={facebook_icon}/></span><p className="p1">FaceBook</p></div>
            </div>

        </div>


    </footer>
    
    
    </>
  )
}

export default footer