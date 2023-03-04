import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state,action) =>{
    switch(action.type){
        case 'DELETE_CONTACT' :
            return{
                contacts : state.contacts.filter((contact) => contact.id !== action.payload)
            };
        default :
            return state;
    }
}

export class Provider extends Component {

    
    state = {
        contacts : [
            {id:1 , name:"El mourabit Mohammed" , tel : "+212 6 70 36 61 90" , email :"elmourabitmohammed00@gmail.com"},
            {id:2 , name:"El mourabit Khalid" , tel : "+212 6 70 36 61 91" , email :"Khalid@gmail.com"},
            {id:3 , name:"El mourabit Ahmed" , tel : "+212 6 70 36 61 92" , email :"Ahmed@gmail.com"},
            {id:4}
        ],
        dispatch: action => this.setState(state => reducer(state,action))
    }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer