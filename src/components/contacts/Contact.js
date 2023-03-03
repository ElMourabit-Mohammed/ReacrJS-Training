import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Contact.css'

class Contact extends Component {

    state ={
        showContactToggle : false
    }

    showContact (message){
        console.log(message)
        //this.state.showContactToggle = true
        this.setState({
            showContactToggle : !this.state.showContactToggle
        })
    }

  render() {
    const {name , tel , email} = this.props.data
    return (
      <div>

        <div className="card">
            <div className="card-body">
                <h4 className="card-title">
                    Contact : {name} 
                        <i onClick={this.showContact.bind(this,name)} className='fa fa-sort-down'></i>
                    </h4>
                <article className="card-text">
                    {(this.state.showContactToggle) ? (
                        <ul className="list-group">
                        <li className="list-group-item">Tel : {tel}</li>
                        <li className="list-group-item">Email : {email}</li>
                    </ul>
                    ) : null}
                </article>
            </div>
        </div>

        {/* 
        <h2>Contact : {name}</h2>
                    {this.props.name}
        <ul>
            <li>Tel : {tel}</li>
            <li>Email : {email}</li>
        </ul>
        */}

      </div>
    )
  }
}

// Contact.defaultProps = {
//     name : "Unknown",
//     tel : "+212 6 xx xx xx xx",
//     email : "xxxx@gmail.com"
// }

Contact.defaultProps = {
    name : "Unknown",
    tel : "+212 6 xx xx xx xx",
    email : "xxxx@gmail.com"
}

// Contact.protoTypes = {
//     name : PropTypes.string,
//     tel : PropTypes.string,
//     email :PropTypes.string
// }

Contact.protoTypes = {
    data : PropTypes.object.isRequired
}

export default Contact;