import './App.css';

function App() {
  let name="El mourabit Mohammed";
  let num1=12;
  let num2=8;
return (
<div className="App">
  <h1>Hello World!</h1>

  <label htmlFor="name">Hello {name}</label>
  <input type="text" name="name" id="" />
  
  <p>{num1}+{num2}={num1+num2}</p>
</div>
);
}

export default App;