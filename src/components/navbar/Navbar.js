import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'

const Navbar = (props) => {
    const {title} = props;
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-success">
            <a className="navbar-brand" href="#">{title}</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
        </nav>
        {/* <h1>{title}</h1> */}
        {/* <h1>{props.title}</h1> */}
    </div>
  )
}

Navbar.defaultProps = {
    title : "No Title"
}

Navbar.prototype ={
    title : PropTypes.string.isRequired
}

export default Navbar;