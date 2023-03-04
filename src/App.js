import './App.css';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contacts/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'
import'font-awesome/css/font-awesome.min.css'
import Contacts from './components/contacts/Contacts';
import { Provider } from './components/Context';

function App() {
  // let name="El mourabit Mohammed";
  // let num1=12;
  // let num2=8;
return (
<div className="App">
  
  {/* 
  <Navbar/>

  <h5>Hello World!</h5>

  <label htmlFor="name">Hello {name}</label>
  <input type="text" name="name" id="" />
  
  <p>{num1}+{num2}={num1+num2}</p>

  <Contact name="El mourabit Mohammed" tel="+212 6 70 36 61 90" email="elmourabitmohammed00@gmail.com"/>
  <Contact name="El mourabit Khalid" tel="+212 6 70 36 61 91" email="Khalid@gmail.com"/>
  <Contact/>
  */}

  <Provider>
    <Navbar title="Contact List"/>
    <Contacts/>
  </Provider>
  
</div>
);
}

export default App;