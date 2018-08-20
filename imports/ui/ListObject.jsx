import React, { Component } from 'react';
import './styles.css';
import Modal from './Modal'

export default class ListObject extends Component {

  constructor(){
    super();
    
  }

  render() {
    return (
      <div className='container postItem'>
          <Modal postData={this.props.postData}/>
      </div>
    )
  }
}
