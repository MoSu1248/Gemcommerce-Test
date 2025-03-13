import React from 'react'
import img from "../../Resources/Images/Body/Rectangle.png"
import "./section_1.css"

const section_1 = () => {
  return (
    <div className='section_1_container'>
         <div className='section_1_inner_container'>    
         <div>
             <div>
              <h2 className='section_1_header'>Nutrition is the foundation for longer, healthier lives in dogs.</h2>
              <p className='section_text'>Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.</p>
              </div>
                  <div className='key_points'>
                    <h4 className='key_header'>Key Points: </h4>
                  <div className='key_points_text_container'><h3>97%</h3> <p>Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.</p></div>
                  <div className='key_points_text_container'><h3>84%</h3> <p>Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.</p></div>
                  <div className='key_points_text_container'><h3>92%</h3> <p>Our dog food's high protein and fat digestibility contribute to ideal stool quality.</p></div>
             
                <button className='section_1_btn'>Give your furry friend the gift of wholesome nutrition</button>
                </div>
         </div>
           <img src={img} alt="" className='section_main_img' />
          </div>      
    </div>
  )
}

export default section_1