import React, { Component } from 'react'
import Header from './Header';
import Events from './Events';
import { getCategories, getEvents } from '../api/events';

export default class Main extends Component {
  state = {
    categories: [],
    events: null,
    isLoading: false
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      categories
    })
  }

  searchEvent = async (category, query) => {
    this.setState({
      isLoading: true
    })
    const events = await getEvents(category, query);
    this.setState({
      events,
      isLoading: false
    })
  }

  render() {
    return (
      <div className="container">
				<Header categories={this.state.categories} searchEvent={this.searchEvent} isLoading={this.state.isLoading}/>
        <Events events={this.state.events}/>
			</div>
    )
  }
}
