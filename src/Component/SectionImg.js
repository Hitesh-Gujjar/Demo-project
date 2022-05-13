import React from 'react'
import './Secions.css';
import img1 from '../image/img1.png'
import img2 from '../image/img2.webp'
import img3 from '../image/img3.webp'
import img4 from '../image/img4.webp'
import img5 from '../image/img5.webp'
function SectionImg() {
  return (
   <>
        <div className='mail_div'>
            <div className='row'>
                <div className='col-sm-2'> 
                
              </div>
                <div className='col-sm-8 '>
                  <div className='d-flex mt-3 p-4' >
                      <ul style={{listStyle:"none"}}>
                      <i class="fa-solid fa-user"/>
                      </ul>
                      <ul style={{listStyle:"none"}}>
                        <li> <p> E-learning Landing Page Design</p></li>
                        <li> <h6>Dmitry Lauretsky for Ronas IT | UI/UX Team</h6></li>
                      </ul>
                  </div>

                  <div className='mt-3'>
                        <img src={img1} class="img-fluid" alt="Responsive image"/>
                    </div>
                    
                    <div>
                      <h5 className='p-5'>Information products are the knowledge that is sold digitally. 
                        During the last few years, online courses became a trend and a profitable business.
                         What is the most effective way to promote them? You know the answer – landing pages!
                          Meet our new concept!</h5>
                    </div>

                    <div className='mt-3'>
                        <img src={img2} class="img-fluid" alt="Responsive image"/>
                    </div>
                    <div className='mt-3'>
                        <img src={img3} class="img-fluid" alt="Responsive image"/>
                    </div>
                    <div>
                      <h5 className='p-5'>
                      Keeping background light, we added two accenting colors – 
                      green and purple. Such color choice makes the landing page look trendy
                       and eye-catching.
                      </h5>
                    </div>

                    <div className='mt-3'>
                        <img src={img4} class="img-fluid" alt="Responsive image"/>
                    </div>

                    <div className='mt-3'>
                        <img src={img5} class="img-fluid" alt="Responsive image"/>
                    </div>

                </div>
                <div className='Icons col-sm-2 position-fixed top-50px  end-0'>

                      <ul className='p-3 ' style={{listStyle:"none",}}>
                        <li className='p-3'><i class="fa-solid fa-user"></i></li>
                        <li className='p-3'><i class="fa-solid fa-user"></i></li>
                        <li className='p-3'><i class="fa-solid fa-user"></i></li>
                        <li className='p-3'><i class="fa-solid fa-user"></i></li>
                        </ul>
                </div>
            </div>

        </div>
   </>
  )
}

export default SectionImg