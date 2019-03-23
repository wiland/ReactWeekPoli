import React, { Component } from 'react';
// import './header.scss';

export default class Header extends Component {
  state = {

  }

  render() {
    const {title, subtitle, color, fontSize} = this.props;
    const style = {color, fontSize}
    return (
      <header style={style}>
        <h2>{title}</h2>
        <h6>-- {subtitle} --</h6>
      </header>
    )
  }
}
