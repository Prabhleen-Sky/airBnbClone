import React, { Component } from 'react'
import Card from '../Card/Card';
import './MainContent.css'
import hotel_api from '../../hotel_api'

class MainContent extends Component {

  render() {
    return (
      <>
      <div className='main-content'>
        
        {
          hotel_api.map(card => {
            return <Card
              key = {card.id}
              imageURL = {card.image}
              name = {card.name}
              location = {card.location}
              rating = {card.rating}
              distance = {card.distance}
              price = {card.price}
              theme = {this.props.theme}
            />
          })
        }
      </div>

      </>
    )
  }
}

export default MainContent;