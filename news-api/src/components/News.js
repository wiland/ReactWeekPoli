import React from 'react'
import PropTypes from 'prop-types'
import New from './New';

const News = ({ news }) => {
  return (
    <div className="row mb-2">
      {news.map((newItem, i) => <New key={i} new={newItem} />)}
    </div>
  )
}

News.propTypes = {
  news: PropTypes.array
}

News.defaultProps = {
  news: []
}

export default News