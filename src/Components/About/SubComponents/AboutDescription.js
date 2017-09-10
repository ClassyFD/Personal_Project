import React, { Component } from 'react';
export default class AboutDescription extends Component {
  render() {
    return(
      <section className='about_description_section'>
        <container className='technologies_title_container'>
          <h1 className='technologies_title'> Store </h1>
        </container>
        <div className='separating_line'/>
        <container className='description_paragraph_container'>
          <h4 className='description_paragraph'> DeliWin is a cafe that sells coffee, sandwiches, and bread. 
            Our coffees are custom made and are "boba tea" style, 
            meaning you can customize the flavor and what you want in it. 
            You can also customize your sandwiches or select from our menu, 
            which will include the Sandwich of the Month (SOTM). This can make a great combination with your coffee. 
            Last but not least, our bread is not just ordinary bread. The selections available will 
            contain what hispanics call "pan dulce," and what vietnamese call "banh mi." </h4>
        </container>
        <div className='separating_line'/>
        <container className='technologies_title_container'>
          <h1 className='technologies_title'> Description </h1>
        </container>
      </section>
    )
  }
}