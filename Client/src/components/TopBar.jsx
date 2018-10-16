import React from 'react';
import style from '../styles/topbar.css';
import Modal from 'react-modal';


let TopBar = (props) =>(
  <div className={style.form}>
  <div className={style.secondHeader}></div>
  <div className={style.logo}>
  <img width="90px" height="33px" src="https://ww8.ikea.com/ext/iplugins/en_US/development/plugins/newHeader/images/logoIKEA.svg"></img>
  </div>
    <div className={style.menu}>
      <span className={style.dropDown}>
      <a className={style.words}>Products</a>
      </span>
      <a className={style.words}>Inspiration</a>
      <a className={style.words}>New</a>
      <a className={style.words}>Offers</a>
      <a className={style.words}>Services</a>
      <a className={style.words}>Back to College</a>
    </div>
    <div className={style.logoContainer}>
      <div className={style.searchForm}>
        <div className={style.formInput}>
          <input  className={style.search}type="text"></input>
        </div>
      </div>
    </div>
    <div className={style.icons1}>
      <a>
        <div className={style.myShoppingList}>
        <img className={style.myShoppingListImg} width="30px" height="30px" src="https://ww8.ikea.com/ext/iplugins/en_US/development/plugins/responsiveHeader/images/nav-shopping-list.svg"></img>
        </div>
      </a>
      <a>
        <div>
          <img className={style.myShoppingCartImg} width="31px" height="31px" src="https://ww8.ikea.com/ext/iplugins/en_US/development/plugins/responsiveHeader/images/nav-shopping-bag.svg"></img>
        </div>
      </a>
    </div>
    <div className={style.ad}>
          <img src="https://ww8.ikea.com/ext/iplugins/en_US/development/plugins/promoBanner/images/shipping-banner-update.jpg" width="1050" height="55"></img>
    </div>
  {/* <div className={style.icons}>
  

  </div> */}
  </div>
)

export default TopBar;