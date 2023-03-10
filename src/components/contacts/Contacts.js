import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../Context';

class Contacts extends Component {

    deleteContact(id){
        const {contacts} = this.state;

        const newListContacts = contacts.filter((contact) => contact.id !== id)

        this.setState({
            contacts : newListContacts
        })
    }

  render() {
    //const{contacts} = this.state
    return (
        <Consumer>
            {value => (
                <div>
                {value.contacts.map((contact)=>(
                    <Contact data={contact} key={contact.id} deleteContactFromChild={this.deleteContact.bind(this,contact.id)}/>
                ))}
              </div>
            )}
        </Consumer>
    )
  }
}

export default Contacts