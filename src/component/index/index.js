import React, { Component } from 'react';
import {connect} from "react-redux"
import '../app.sass';
import Nav from "../nav"
import AsideMenu from "../nav/asideMenu"
import Footer from "../nav/footer"

import IChead from "./indexContent/IChead"
import ICconeactstore from "./indexContent/ICconeactstore"
import ICconeactBasket from "./indexContent/ICconeactBasket"
import ICsale from "./indexContent/ICsale"
import ICaboutus from "./indexContent/ICaboutus"
import ICForm from "./indexContent/ICForm"
import ICFooter from "./indexContent/ICFooter"


class IndexApp extends Component {
  constructor(){
    super()
    this.state= {

    }
  }
  
    render() {
      return (
        <div id="IndexApp">
        <Nav />
        <AsideMenu />
        <IChead />
        <ICconeactstore />
        <ICconeactBasket />
        <ICsale base={this.props.base}/>
        <ICaboutus />
        <ICForm />
        <ICFooter />
        <Footer />
        </div>
      );
    }
  }
  
  export default connect(
    (store)=>{
  return {
    base: store.basket,
  }
    },
  ) (IndexApp);