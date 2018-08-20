import React, { Component } from 'react';
import "./styles.css";
import Body from './Body'

export default class Header extends Component {

    constructor(){
        super();
        this.state={
            uri: "http://www.reddit.com/r/funny/.json",
        }
        this.handleKeyPress=this.handleKeyPress.bind(this);
    }

    handleKeyPress(e){
        let value="http://www.reddit.com/r/"+e.target.value+"/.json";
        this.setState(()=>{
            return {uri: value};
        });
    }

    render() {
        return (
            <div className='container-fluid m-0'>
                <div className="row">
                    <div className="headerStyle col-md-2 d-none d-sm-block"></div>
                    <div className="col-md-8" >
                        <div className='row headerStyle justify-content-between'>
                            <div className='col redditLogo'>Reddit</div>
                            <div className="d-sm-none w-100"></div>
                            <div className='col'>
                                <div className='form-group searchBar'>
                                    <input defaultValue='funny' type="text" className='form-control' onKeyUp={this.handleKeyPress}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="headerStyle col-md-2 d-none d-sm-block"></div>
                </div>
                <Body uri={this.state.uri}/>
            </div>
        )
    }
}