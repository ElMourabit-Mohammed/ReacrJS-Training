import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
    state = {
        contacts : [
            {id:1 , name:"El mourabit Mohammed" , tel : "+212 6 70 36 61 90" , email :"elmourabitmohammed00@gmail.com"},
            {id:2 , name:"El mourabit Khalid" , tel : "+212 6 70 36 61 91" , email :"Khalid@gmail.com"},
            {id:3 , name:"El mourabit Ahmed" , tel : "+212 6 70 36 61 92" , email :"Ahmed@gmail.com"},
            {id:4}
        ]
    }
  render() {
    const{contacts} = this.state
    return (
      <div>
        {contacts.map((contact)=>(
            <Contact data={contact} key={contact.id}/>
        ))}
      </div>
    )
  }
}

export default Contacts