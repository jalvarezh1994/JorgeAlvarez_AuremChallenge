import { Meteor } from "meteor/meteor";
import React from "react";
import {render} from "react-dom";
import './main.html';
import App from "./../imports/ui/App";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

Meteor.startup(()=>{
  render(<App/>,document.getElementById('app'));
});