import React from 'react';
import './App.css';
import email from './component/assets/email.png'
import pass from './component/assets/passward.png'


function App() {
  
    return(
<div className="container">
  <h2>Login</h2><br/>
 <img className="em" src={email} /><input type="text" className="ema" placeholder="Email"/><br/><br/>


 <img className="e" src={pass} /><input type="Password" className="ema" placeholder="Passward"/><br/>
 <input type="checkbox" />Remeber me
  <a href="#" className="for"><b>Forgetpassward</b></a><br/><br/>
<button className="bt"><b>login</b></button>
  </div>

    );


}

export default App;
