import '../assets/css/flexboxgrid.min.css';
import '../assets/css/MenuSubItem.css';
import '../assets/css/icons.css';
import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked
    }
    console.log(this.props.checkable);
  }
  click() {
    this.props.do(this.state.checked);
    this.setState(state => ({
      checked: !state.checked 
    }));
  }
  render() {
    return (
      <div className={"subitem " + (this.props.checkable ? "checkable" : "")} onClick={this.click.bind(this)}>
        <i className={(this.state.checked ? "icon-plus" : "icon-minus")} /><span>{this.props.name}</span>
      </div>
    );
  }
}

export default App;
