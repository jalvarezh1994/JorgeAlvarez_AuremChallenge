import React from 'react';
import Iframe from 'react-iframe';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

    render() {
        return (
            <div>
                <div className='row' onClick={this.toggle}>
                    <div className="col-2">
                        {/* Se toma la imágen de las props y se redondea con console.log(this.props);Bootstrap */}
                        <img className='profilePic rounded-circle' src={this.props.postData[2]} alt="profilePic"/>
                    </div>
                    <div className="d-sm-none w-100"></div>
                    <div className='col-8'>
                        {/* Nombre del usuario sacado de las props */}
                        <div className='userName'>{this.props.postData[0]}</div>
                        {/* Texto del post sacado de las props */}
                        <div className='postText'>{this.props.postData[1]}</div>
                        {/* Estadísticas que se consiguen de un array */}
                        <div className='row stats justify-content-start'>
                            <div className='col stats'>
                                <div className="row stats">
                                    <div className='statItem'><img src='/message-icon.png' alt='Mensajes'/>{this.props.postData[5]}</div>
                                    <div className='statItem'><img src='/heart-icon.png' alt='Likes'/>{this.props.postData[3]}</div>
                                    <div className='statItem'><img src='/down-icon.png' alt='Downvotes'/>{this.props.postData[4]}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className='row align-items-center'>
                            <div className='col'>
                                {/* <Modal title={this.props.postData[1]} content={this.props.postData[6]}/> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='profilePic'>
                    <Button onClick={this.toggle}>Ver post</Button>
                </div> */}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.postData[1]}</ModalHeader>
                    <ModalBody>
                        <Iframe url={this.props.postData[6]}></Iframe>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Salir</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ModalExample;