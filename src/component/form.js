import React, { Component } from 'react';
import kidsLoop from './kidsloop_min_logo.png';  
import './form.css';

class Form extends Component {
    render () {
        return (
            <div id='sign-up'>
                <img src={kidsLoop} />
                <h2>Sign In</h2>
                <label for='Email'>
                    <input className='input-style' type='text' size='32' placeholder='Email or Phone *'/><p></p>
                    </label>
                <label>    
                    <input className='input-style' type='text' size='32' placeholder='Password *'/>
                    </label>    
                <button>Sign In</button>
                <p className='help'>Forgot Password?</p>
                <p className='help'>Create an account</p>
                <p id='language' className='list'>Select Language</p>
                <ul>
                    <li className='list'>Help</li>
                    <li className='list'>Privacy</li>
                    <li className='list'>Terms</li>
                </ul>

                <p><hr id="tiny-circle" /></p> 
               
            </div>
        )
    }
}

export default Form;
