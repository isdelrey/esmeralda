import '../assets/css/flexboxgrid.min.css';
import '../assets/css/MenuItem.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
  }
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside.bind(this), true);
  }
  componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside.bind(this), true);
  }
  handleClickOutside(event) {
      const domNode = ReactDOM.findDOMNode(this);

      if (!domNode || !domNode.contains(event.target)) {
          this.setState({
              opened : false
          });
      }
  }
  switch() {
    this.setState(state => ({
      opened: !state.opened
    }));
  }
  close() {
    this.setState(state => ({
      opened: false
    }));
  }
  render() {
    return (
      <div className={"menuitem " + (this.state.opened ? "active" : "")}>
        <div className="title" onClick={this.switch.bind(this)}>{this.props.name}</div>
        <div className="subitems">{this.props.children}</div>
      </div>
    );
  }
}

export default MenuItem;
