import React from 'react';
import style from '../styles/list.css';

let List = (props) =>(
  <div className={style.layout}>
    
      <img src={props.picture.Url} height="114" width="114"/>
  </div>
)

export default List;