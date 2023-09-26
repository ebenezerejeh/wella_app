import React from 'react'
import food_packages from '../images/Mask_group.png'
import flower_vases from '../images/image_1.png'
import image_seasoning from '../images/image_3.png'
import ellipse_image from '../images/Ellipse_13.png'
import ellipse_image2 from '../images/Ellipse_14.png'
import icon_arrow_up from '../images/icon-arrow-up.svg'

const section = () => {
  return (
    <>
    <section className="main_section">

                    

                        <div className="image_section_header"  data-aos="fade-left">
                            <p> Need Good Meals? Choose <span className="special_logo_text">Wela</span></p>

                        </div>

                        <div className="image_section_cards">

                            <figure   data-aos="zoom-out">
                                
                                <figcaption>
                                    <p className="figcap_header">Preplanned Meals</p>
                                    <p className="figcap_body">Take the stress off deciding your next meal and chop Wella</p>
                                </figcaption>
                                <img src={food_packages} alt="food_packages"/>
                                
                            </figure>
                            
                            <figure className="fig2" data-aos="zoom-out">

                                <figcaption>
                                    <p className="figcap_header">Meal Plans</p>
                                    <p className="figcap_body">Take the stress off deciding your next meal and chop Wella</p>


                                </figcaption>
                                <img src={flower_vases} alt="flower_vases"/>

                            </figure>
                            
                            <figure className="fig2" data-aos="zoom-out">

                                <figcaption>
                                    <p className="figcap_header">Free Chow</p>
                                    <p className="figcap_body">Take the stress off deciding your next meal and chop Wella</p>
                                </figcaption>
                                <img src={image_seasoning} alt="seasoning"/>

                            </figure>
                            

                        </div>



                    

                    
                    
                    
                    
                    <div className="accordion_section">

                        <img src={ellipse_image} className="accordion_heading_image" alt="ellipse_image"/>
                        
                        <div className="accordion_section_heading"  data-aos="fade-left">
                            <p className="accordion_heading_par1">FAQ's</p>
                            
                        </div>
                        
                        <div className="accordion_item first_accordion" data-aos="fade-up">
                            <p className="accordion_item_para">What is Wela about</p>
                            <img className="accordion_item_arrowUp" src={icon_arrow_up} alt="icon-arrow-up"/>
                        </div>
                        <div className="accordion_item" data-aos="fade-up">
                            <p className="accordion_item_para">What is Wela about</p>
                            <img className="accordion_item_arrowUp" src={icon_arrow_up} alt="icon-arrow-up"/>
                        </div>
                        <div className="accordion_item" data-aos="fade-up">
                            <p className="accordion_item_para">What is Wela about</p>
                            <img className="accordion_item_arrowUp" src={icon_arrow_up} alt="icon-arrow-up"/>
                        </div>
                        <div className="accordion_item" data-aos="fade-up">
                            <p className="accordion_item_para">What is Wela about</p>
                            <img className="accordion_item_arrowUp" src={icon_arrow_up} alt="icon-arrow-up"/>
                        </div>
                        <div className="accordion_item" data-aos="fade-up">
                            <p className="accordion_item_para">What is Wela about</p>
                            <img className="accordion_item_arrowUp" src={icon_arrow_up} alt="icon-arrow-up"/>
                        </div>
                        <div className="accordion_item" data-aos="fade-up">
                            <p className="accordion_item_para">What is Wela about</p>
                            <img className="accordion_item_arrowUp" src={icon_arrow_up} alt="icon-arrow-up"/>
                        </div>

                        <img src={ellipse_image2} className="accordion_heading_image2" alt="ellipse_image" />


                    </div>





                    <div className="booking_section_container">
                        <div className="booking_section_inner_container">

                        <div className="booking_section_main" data-aos="fade-left">

                            <div className="booking_section_text" >
                                <p className="B_S_para1">Want to be the First to See it? Get Front Row Seats</p>
                                <p className="B_S_para2">Experience Wella first hand, for free</p>

                                <button className="B_S_button1">Get Early Access</button>
                                <button className="B_S_button2">Contact Team</button>
                            </div>
                            
                            <div className="booking_section_time">
                                <div className="hrs"><p className="time_digit">22</p><p className="time_wrds">HRS</p></div>
                                <div className="hrs"><p className="time_digit">14</p><p className="time_wrds">MINS</p></div>
                                <div><p className="time_digit">10</p><p className="time_wrds">SECS</p></div>
                            </div>




                        </div>
                        
                        </div>

                    </div>
     


    </section>
    
    
    </>
  )
}

export default section