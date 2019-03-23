import React from 'react';
import './footer.scss';

const Footer = ({ createdBy, createdOn }) => {
  return (
    <footer className="p-2">
      <h6 className="copyright">By {createdBy} &copy; {createdOn}</h6>
    </footer>
  )
}

export default Footer;