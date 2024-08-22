
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({setPlaystate}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt='' className='about-img'/>
        <img src={play_icon} alt='' className='play-icon' onClick={()=>{setPlaystate(true)}}/>
      </div>

      <div className='about-right'>
         <h3>ABOUT UNIVERSITY</h3>
         <h2>Nurturing Tomorrows Leaders Today</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia optio ad incidunt nam eligendi porro atque nemo et laboriosam saepe, nihil, 
            voluptatibus quidem corrupti recusandae cum est neque voluptatum minus?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quam aliquam ad esse porro natus cupiditate aut voluptate fugiat tenetur,
             molestiae perspiciatis? Enim ullam nam rem harum, error praesentium dolore non!</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolores veniam illo asperiores, sunt omnis assumenda quas,
             sapiente ducimus odio sed animi quibusdam corrupti corporis
              est repudiandae ipsa a facere deserunt?</p>
      </div>
    </div>
  )
}

export default About
