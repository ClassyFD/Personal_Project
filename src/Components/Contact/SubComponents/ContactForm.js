import React, { Component } from 'react';

export default class ContactForm extends Component {
  render() {
    return (
      <section className='contact_form_section'> 
        <container className='contact_form_container'>
          <form className='contact_form_parent'>
            <div> 
              <h1> Name: </h1>
              <input className='contact_form_input_name' type="text"/>
            </div>
            <div>
              <h1> (optional) email: </h1>
              <input className='contact_form_input_email' type="text"/>
            </div>  
            <div>
              <h1> Reason for contact: </h1>
              <textarea className='contact_form_textarea_reason' rows={15} cols={90}/>
            </div>
            <div className='contact_form_button_submit'>
              <button> Submit </button>
            </div>
          </form>
        </container>
      </section> 
    )
  }
}