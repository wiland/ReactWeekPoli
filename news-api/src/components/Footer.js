import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
  return (
    <footer className="blog-footer">
			<p>
				Blog template built for <a href="/">{props.author}</a> by <a href="/">{props.user}</a>.
			</p>
		</footer>
  )
}

Footer.propTypes = {
	author: PropTypes.string.isRequired,
	user: PropTypes.string.isRequired,
}

export default Footer
