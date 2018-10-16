import React from 'react';
import axios from 'axios';
import MainDisplay from './MainDisplay.jsx';
import TopBar from './TopBar.jsx';
import Description from './Description.jsx';
import Carousel from './carousel.jsx';
import style from '../styles/app.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      temp:{imageUrl:'', additionalUrl:[{Url:''},{Url:''}]}
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:3000/api/display')
    .then((response)=>{
      // console.log(' this is response', response)
      this.setState({
        temp: response.data
      })
      // console.log('this is the state', this.state.temp)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  render(){


// Create a Wrapper component that'll render a <section> tag with some styles

    return (
      <div>
        <div className={style.header1}>
          <div className={style.header2}>
            <div className={style.header3}>
            <a className={style.items}>IKEA FAMILY</a>
            <a className={style.items}>IKEA for business</a>
            <a className={style.items}>Customer Services</a>
            <a className={style.items}>Financing</a>
            <a className={style.items}>Join our email list</a>
            </div>
            <div className={style.chooseStore}>
              <div className={style.chooseStoreBox}>
                <div className={style.chooseStoreIcon}>
                <img src="https://ww8.ikea.com/ext/iplugins/en_US/development/plugins/chooseStoreHeader/images/store_icon_new.svg"width="18px" height="auto"/>
                </div>
                <div className={style.chooseStoreText}>
                My preferred Store:
                <br></br>
                <b>
                  <span className={style.storeText}>CA, Burbank</span>
                </b>
                </div>
              </div>
              <div className={style.login}>
                <a className={style.loginItem}>Log in/Sign up</a>
              </div>
            </div>
        </div>
      </div>
      <TopBar/>
        {/* <div className={style.ad}>
          <img  src="https://ww8.ikea.com/ext/iplugins/en_US/development/plugins/promoBanner/images/shipping-banner-update.jpg"></img>
        </div> */}
      <div className={style.rightContent}>
      <div>
      <div className={style.pipContainer}>
        <ul className={style.breadcrumbs}>
          <li className={style.breadcrumbs1}>Home</li>
          <li className={style.divider}>/</li>
          <li className={style.breadcrumbs1}>Office Furniture</li>
          <li className={style.divider}>/</li>
          <li className={style.breadcrumbs1}>Work Lamps</li>
        </ul>
      </div>
      </div>
      <div className={style.display}>
      
      <MainDisplay display={this.state.temp}/>
      <Description description={this.state.temp}/>
      </div>
      {/* <div className={style.display1}>
      <Carousel pics={this.state.temp}/>
      </div> */}
      </div>
      </div>
    )
    // if(this.state.temp === null){
    //   return(<div>Loading</div>)
    // } else {
    // return (<MainDisplay display={this.state.temp[0]}/>)
    // }
  }
}

export default App;