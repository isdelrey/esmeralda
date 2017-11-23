import '../assets/css/flexboxgrid.min.css';
import React from 'react';
import { inject } from 'mobx-react';
import '../assets/css/Main.css';

class Main extends React.Component {
  componentDidMount() {
    navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
      let canvas = document.getElementById("image");
      let feed = document.getElementById("feed");
      feed.src = window.URL.createObjectURL(stream);
      feed.play();
      //canvas.getContext("2d").drawImage(feed, 0, 0, 300, 300, 0, 0, 300, 300);
    }).catch((err) => alert("error: " + err));
  }
  render() {
    return (
      <div><video id="feed" width="300" height="300"></video><canvas id="image"></canvas></div>
    );
  }
}

export default inject('store')(Main);
