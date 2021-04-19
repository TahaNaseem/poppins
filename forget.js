import React from 'react';
import './forget.css';
import email from './component/assets/email.png'

function Forget(){

    return(
<div className="container">
<h2>Forget Passward</h2><br/>
 <img className="em" src={email} /><input type="text" className="ema" placeholder="Email"/><br/><br/>
 <button className="t"><b>Submit</b></button>
</div>
    );
}
export default Forget