

import './Testimonials.css';
import { useRef } from 'react';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;
  
    const slideForward=()=>{
         if(tx >-50){
            tx -=25;
         }
         slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward=()=>{
       if(tx<0){
         tx +=25;
       }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
  


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
         <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt=""/>
                        <div>
                            <h3>Willium Jackson1</h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>
                        Chossing to pursue my degree at Edusity was one of the best decision
                        I have ever made.The supportive,commuinity,state-of -the art facility.
                    </p>
                </div>
            </li>


            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt=""/>
                        <div>
                            <h3>Willium Jackson2</h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>
                        Chossing to pursue my degree at Edusity was one of the best decision
                        I have ever made.The supportive,commuinity,state-of -the art facility.
                    </p>
                </div>
            </li>


            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt=""/>
                        <div>
                            <h3>Willium Jackson3</h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>
                        Chossing to pursue my degree at Edusity was one of the best decision
                        I have ever made.The supportive,commuinity,state-of -the art facility.
                    </p>
                </div>
            </li>


            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt=""/>
                        <div>
                            <h3>Willium Jackson4</h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>
                        Chossing to pursue my degree at Edusity was one of the best decision
                        I have ever made.The supportive,commuinity,state-of -the art facility.
                    </p>
                </div>
            </li>
         </ul>
      </div>
    </div>
  )
}

export default Testimonials
