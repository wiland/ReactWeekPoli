import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Header from './Header';
import News from './News';
import Footer from './Footer';
import { getHeadlinesNews } from '../api/news';
import "./Main.css";

export default class Main extends Component {
  state = {
    news: []
  }

  static propTypes = {
    prop: PropTypes
  }

  componentDidMount() {
    getHeadlinesNews()
      .then(news => {
        this.setState({ news })
      });
  }

  onCategoryChange = category => {
    getHeadlinesNews(category)
      .then(news => {
        this.setState({ news })
      });
  }

  render() {
    return (
      <div className="container">
        <Header onCategoryChange={this.onCategoryChange} />
        <News news={this.state.news} />
        <Footer author="Wilmer" user="@wiland2315" />
      </div>
    )
  }
}
// 02ad4f6382cf42f097eececad900b340
