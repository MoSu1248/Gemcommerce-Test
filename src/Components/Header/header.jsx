import React from 'react'
import "./header.css"
import FoodImg from "../../Resources/Images/Header/frameheader.png"
import Img1 from "../../Resources/Images/Header/header_img_1.png"
import Img2 from "../../Resources/Images/Header/header_img_2.png"
import Img3 from "../../Resources/Images/Header/header_img_3.png"
import Img4 from "../../Resources/Images/Header/header_img_4.png"
import Payments from "../../Resources/Images/Header/PaymentImgs/Payments.png"
import Vector from "../../Resources/Images/Header/PaymentImgs/Vector.png"
    
//Code for the header Section of the application ,providing format for the initial landing page as well as setting classnames for further styling. 

const header = () => {
  return (
      <div>

          <h1 className='header'>What makes us different makes them stronger</h1>
          <div className='header_item_top_container'>
              <div className='sheader_info'>
                  <div className='header_info'>
                      <div className='img_1_container_styling img_container_general_styling'><img src={Img1} alt="food img" srcset="" className='img_1_styling'/></div>
                <div className='header_item_info header-item-margins'>
                       <h5 className='header_item_info_header '>Real Food</h5>   
                       <p className='header_item_info_text'>Wholesome recipes for dogs with real meat and veggies.</p>
                  </div>
             </div>
             <div className='header_info'>
                      <div className='img_2_container_styling img_container_general_styling'><img src={Img2} alt="ingrediant img" srcset="" className='img_2_styling'/></div>
                <div className='header_item_info header-item-margins' >
                       <h5 className='header_item_info_header'>Premium Ingredient</h5>   
                       <p className='header_item_info_text'>Elevating pet care with unmatched safety and quality.</p>
                  </div>
             </div>
              </div>
              <div><img src={FoodImg} alt="" srcset="" className='header_main_img_styling' /></div>
              <div className='sheader_info'>
                  <div className='header_info'>
                      <div className='img_3_container_styling img_container_general_styling'><img src={Img3} alt="fresh food img" srcset="" className='img_3_styling'/></div>
                <div className='header_item_info'>
                       <h5 className='header_item_info_header'>Made Fresh</h5>   
                       <p className='header_item_info_text'>We prioritize maintaining the integrity of whole foods and nutrition.</p>
                  </div>
             </div>
             <div className='header_info'>
                      <div className='img_4_container_styling img_container_general_styling'><img src={Img4} alt="Vet quality img" srcset="" className='img_4_styling'/></div>
                <div className='header_item_info'>
                       <h5 className='header_item_info_header'>Vet Developed</h5>   
                       <p className='header_item_info_text'>We raise the bar for dog nutrition, surpassing industry expectations.</p>
                  </div>
             </div>
              </div>
          </div>
          <div className='payments_top_container' >
              <button className='btn-styling'>Get your dog's healthy meal today!</button>
              <div className='payments_container'>
                  <div className='payments_inner_container'><img src={Vector} alt="" className='vector-styling' /> <p>30-day money back guarantee</p></div>
                  
                  <img src={Payments} alt="" />
              </div>
          </div>
    </div>
  )
}

export default header