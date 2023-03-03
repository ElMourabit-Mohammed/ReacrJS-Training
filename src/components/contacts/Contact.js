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

    onDeleteClick = () => {
        console.log("button delete clicked")
        this.props.deleteContactFromChild()
    }

  render() {
    const {name , tel , email} = this.props.data
    return (
      <div>

        <div className="card">
            <div className="card-body">
                <h4 className="card-title">
                    Contact : {name} 
                        <i
                        className='fa fa-sort-down'
                        style={{cursor:'pointer'}}
                        onClick={this.showContact.bind(this,name)}>
                        </i>

                        <i className="fa fa-times"  aria-hidden="true"
                        style={{color:'red' , float :'right' , cursor:'pointer'}}
                        onClick={this.onDeleteClick}></i>
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

// Contact.protoTypes = {
//     name : PropTypes.string,
//     tel : PropTypes.string,
//     email :PropTypes.string
// }

Contact.defaultProps = {
    name : "Unknown",
    tel : "+212 6 xx xx xx xx",
    email : "xxxx@gmail.com"
}

Contact.protoTypes = {
    data : PropTypes.object.isRequired,
    deleteContactFromChild : PropTypes.func.isRequired
}

export default Contact;