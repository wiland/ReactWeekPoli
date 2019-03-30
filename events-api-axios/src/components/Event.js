import React from 'react'
import PropTypes from 'prop-types'

const Event = props => {
	const {logo, url, name, start, summary, is_free, description, currency} = props.event;
	const imageUrl = logo && logo.url ? logo.url : "http://www.vacationmexicobeach.com/images/no-image-available2.jpg";
	const cardText = description && description.text ? description.text.substring(0, 100) + "..." : summary;
	
  return (
    <div className="col-md-6">
			<div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
				<div className="card">
					<div className="card-img-container">
						<img src={imageUrl} className="card-img-top img-noticias img-fluid" alt={name.text} />
						<div className="d-flex justify-content-flex-start card-tags">
							<span className="badge badge-success card-badge">{is_free ? "Gratis" : "Pago"}</span>
							<span className="badge badge-warning card-badge">{currency}</span>
						</div>
					</div>
					<small className="text-muted ml-2">{start.timezone} - {start.local}</small>
					<div className="card-body">
						<h5 className="card-title">{name.text}</h5>
						<p className="card-text">{cardText}</p>
						<a href={url} className="btn btn-outline-dark btn-sm" target="_blank" rel="noopener noreferrer">
							Ver en Eventbrite
						</a>
					</div>
				</div>
			</div>
		</div>
  )
}

Event.propTypes = {
	event: PropTypes.shape({
		logo: PropTypes.shape({
			url: PropTypes.string
		}),
		url: PropTypes.string,
		name: PropTypes.shape({
			text: PropTypes.string
		}),
		description: PropTypes.shape({
			text: PropTypes.string
		}),
		start: PropTypes.shape({
			timezone: PropTypes.string,
			local: PropTypes.string
		}),
		summary: PropTypes.string
	})
}

export default Event
