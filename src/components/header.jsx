import React from 'react'
import { useGlobalContext } from '../context'
import logo from '../images/Logo.png'
import nav_ham from '../images/icon-hamburger.svg'
import arrow_image from '../images/Arrow_1.png'
import mockup_image from '../images/Mockup.png'

const header = () => {
    const {openModal} = useGlobalContext();
  return (
    <>

    <header className="main_header">
            
            
            <div className="header_nav">
                    <div className="header_nav_logo"> <img src={logo} alt="wella_logo"/> </div>
                    <div className="header_nav_buttons">
                        <button className="nav_header_btn btn1">Services</button>
                        <button className="nav_header_btn btn2">Calorie Counter</button>
                        <button className="nav_header_btn btn3">FAQ's</button>
                    </div>
                    <div className="header_nav_contactbtn">
                        <button className="nav_header_contactbtn">Contact Us</button>
                        <div className="header_nav_hamburger"><img src={nav_ham} onClick={openModal} /></div>
                    </div>


                </div>

            <div className="hero_container">
                    <div className="hero_text" data-aos="zoom-in">

                        <div className="hero_text_heading">
                            <p>Healthy living, One Bite at a Time</p>
                        </div>

                        <div className="hero_text_subheading">
                            <p>At Wella, we offer a range of food options to help
                                you feel and look good.
                            </p>
                        </div>

                        <div className="launch_details">
                            <div className="launch_text"><p>We launch in 3 days</p></div>
                            <div className="launch_pointer"><img src={arrow_image} alt="arrow_image"/></div>
                            
                        </div>

                        <div className="hero_input_container">
                            <form>
                                <input className="email_holder" type ="email" name="email" placeholder="Email Address"/>
                                <input className="submit_button" type="submit" value="Get Early Access"/>
                            </form>
                        </div>







                    </div>


                    <div className="hero_image"  data-aos="zoom-in"><img src={mockup_image}/></div>



            </div>

        
        </header>

    
    </>
  )
}

export default header