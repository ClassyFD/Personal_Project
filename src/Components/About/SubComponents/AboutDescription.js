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
            Our coffees are custom made, 
            meaning that the customer can customize the flavor and what toppings they want inside them. 
            They can also customize the sandwiches or select from our menu, 
            which will include the Sandwich of the Month (SOTM). This can make a great combination with our coffee. 
            Last but not least, our selections of bread will 
            include what hispanics call "pan dulce," and what vietnamese call "banh mi." </h4>
        </container>
        <div className='separating_line'/>
        <container className='technologies_title_container'>
          <h1 className='technologies_title'> Description </h1>
        </container>
      </section>
    )
  }
}