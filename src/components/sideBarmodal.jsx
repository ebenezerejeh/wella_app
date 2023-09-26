import React, { useState } from 'react'
import logo from '../images/Logo.png'
import { useGlobalContext } from '../context'
import close_icon from '../images/icon-close.svg'

const sideBarmodal = () => {

  const { toggle, closeModal } = useGlobalContext();
  
  
  
  return (
    <>
    <div className= {toggle ? "sidebar_modal" : "sidebar_modal close_sidebar"}>
            <div className="sidebar_header">
                <div className="sidebar_nav_logo"> <img src={logo} alt="wella_logo"/> </div>
                <div className="sidebar_nav_close"><img src={close_icon} onClick={closeModal} /></div>
                

            </div>

            <div className="sidebar_section">

                <div className="sidebar_nav_button nav_button1"><p>Services</p></div>
                <div className="sidebar_nav_button"><p>Calorie Counter</p></div>
                <div className="sidebar_nav_button"><p>FAQ's</p></div>
                <div className="nav_contact_btn"><button className="nav_inner_contactbtn">Contact Us</button></div>

            </div>



        </div>

    
    
    
    
    
    </>
    
    
  )
}

export default sideBarmodal