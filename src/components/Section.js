import '../assets/css/flexboxgrid.min.css';
import '../assets/css/Section.css';
import React, { Component } from 'react';
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="title">{this.props.text}</div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
