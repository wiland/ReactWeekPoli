import React from 'react'
import PropTypes from 'prop-types'

const New = props => {
  const { urlToImage, author, publishedAt, title, content, url, source } = props.new;
  const imageUrl = urlToImage ? urlToImage : "http://www.vacationmexicobeach.com/images/no-image-available2.jpg";

  return (
    <div className="col-md-6">
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative">
        <div className="card">
          <img src={imageUrl} className="card-img-top img-noticias img-fluid" alt={source.name} />
          <small className="text-muted">{author} - {publishedAt}</small>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
            <a href={url} className="btn btn-outline-dark btn-sm" target="_blank" rel="noopener noreferrer">
              { source.name }
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

New.propTypes = {
  new: PropTypes.shape({
    urlToImage: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string
  }).isRequired
}

export default New
