import React from 'react';
import style from '../styles/mainDisplay.css';
import Carousel from './carousel.jsx';
import Slider from "nuka-carousel";
import List from './List.jsx';


let MainDisplay = (props) => (
  <div className={style.layout2}>
  {/* {console.log('props in display', props.display.additionalUrl.length)} */}
  <img src={props.display.imageUrl} height="500" width="500"/>
  <div>
    <Slider slidesToShow={props.display.additionalUrl.length} cellAlign="left">
    <Carousel pics={props.display}/>
    </Slider>
  </div>
  {/* <div>
  <Slider slidesToShow={3}>
  {props.display.additionalUrl.forEach(function(slide){
    
    <img src={slide.Url}/>

  })}
  </Slider>
  </div> */}
  </div>
)


export default MainDisplay;