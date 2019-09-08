import React, { Component } from 'react'
import FontForm from '../FontForm/FontForm';

export default class FontList extends Component {
  state = {
    fonts: [
      {id: 1, fontSize: "144pt", lineHeight: "250px", marginTop: "-49px", link: 'AFForm-Regular', name: 'AFForm', word: 'Дух времени', specimen: "Latin / Кириллица", price: 2000},
      {id: 2, fontSize: "78pt", lineHeight: "184px", marginTop: "28px", link: 'Form-Bold', name: 'Form Bold', word: 'Бесстрашие', specimen: "Latin / Кириллица", price: 2000},
      {id: 3, fontSize: "165px", lineHeight: "203px", marginTop: "-12px",link: 'Germanica-Regular', name: 'Germanica', word: 'дизайн', specimen: "Latin / Кириллица", price: 2000},
    ]
  }
  render() {
    
    return (
      <div>
          {this.state.fonts.map((font) => 
            <FontForm 
              key={font.id} 
              name={font.name}
              link={font.link}
              word={font.word}
              language={font.language}
              price={font.price}
              fontSize={font.fontSize}
              lineHeight={font.lineHeight}
              marginTop={font.marginTop}
              selected={true}/>
          )} 
      </div>
    )
  }
}