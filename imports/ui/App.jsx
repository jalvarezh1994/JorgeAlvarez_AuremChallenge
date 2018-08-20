import React, { Component } from 'react'
import Header from "./Header";
import Body from "./Body";

export default class App extends Component {
  
  render() {
    return (
      <div className='container-fluid m-0 p-0'>
        {/* El header y el body cuentan con las mismas características responsive */}
        <Header/>
        
      </div>
    )
  }
}
