import '../assets/css/flexboxgrid.min.css';
import '../assets/css/icons.css';
import React, { Component } from 'react';
/*import paper from 'paper';*/
import { inject } from 'mobx-react';
import '../assets/css/Image.css';
import {Microscope} from '../lib/Microscope';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { source: "Emulation" };
  }
  load() {
    if(this.props.store.contents.emulation) {
      Microscope.emulate(document.getElementById("image"));
      this.setState({ source: "Emulation" });
    }
    else
      Microscope.setup(document.getElementById("video"), document.getElementById("image"), this.props.store.contents.allow_cam, (source) => {
        this.setState({ source: source });
      })
  }
  componentWillReceiveProps() {
    this.load();
  }
  componentDidMount() {
    this.load();/*
    paper.setup(document.getElementById("image"));
    var path = new paper.Path.Circle(new paper.Point(200, 200), 1000);
    path.style = {
        fillColor: new paper.Color(1, 0, 0),
        strokeColor: 'black',
        strokeWidth: 5
    };
		paper.view.draw();*/
  }
  render() {
    return (
      <div className="image_view">
        <div id="source">{this.state.source}</div>
        <div id="stabilisation">Estabilització: 100%</div>
        <div id="side">
          <div>
            <i className="icon-droplet" />
            <div className="label">Selector puntual de color</div>
          </div>
          <div>
            <i className="icon-layers" />
            <div className="label">Selector de capes</div>
          </div>
          <div>
            <i className="icon-camera" />
            <div className="label">Bloquejar imatge</div>
          </div>
        </div>
        <video id="video"></video>
        <canvas id="image" resize="true"></canvas>
      </div>
    );
  }
}

export default inject('store')(App);
