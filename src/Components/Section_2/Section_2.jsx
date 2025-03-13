import React from 'react'
import "./section_2.css"
import img from "../../Resources/Images/Body/rectangle_food.png"

const Section_2 = () => {
  return (
      <div className='section_2_top_container'>
          <div className='section_2_inner_container section_2_inner_container_styling1'><img src="https://s3-alpha-sig.figma.com/img/9a44/09f6/84a5519dabc916a48f3dd3616198aa78?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fESOWpVVgG9w6FEyuq5p5evgVKCXeZL7WOlWXvd7g3v0pPbY5S78I2RO6p8mflUe9tmagDHWtL-OBszPkhDlDzUvn3Gt0Yt5AnbSSY8vO1F1f7x-dBo-LGEoat3reBs9dk-vXkxPRE7rbjNWSFejYYo2qjmAAV7EdYl06DIVUflg1EinzJdwgtNdE~ikMVnlvoGeRyYVeRkZVIfpZnK2wexUKmXZBTQgLRkvI2WGPRlTutnp-n2fLbRUko8~PbywRwC20DeOMcUSHip4i96X3Oo0nog51s~FEB3zagOvOukut1XVaYt~UtzFN59bZ69tnLCATniD8UEu~pMoPC8Tdw__" alt="Dogs eating gif" className='gif-styling'/>
              <div><h2>Improve overall gastrointestinal health for better nutrient absorption</h2><p>Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.
              </p></div></div>
          <div className='section_2_inner_container section_2_inner_container_styling2'>
          <div>
                  <h2>Prebiotics nourish the beneficial gut bacteria, supporting digestive health</h2><p>Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.
                  </p>
              </div>
              <img src={img} alt="Image of dog food" className='section_2_img_styling'/>
          </div>
    </div>
  )
}

export default Section_2