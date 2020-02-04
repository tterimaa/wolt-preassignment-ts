import React from 'react'
import { Restaurant } from './types'

const RestaurantItem: React.FC<Restaurant> = ({ name, image, city, delivery_price, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{city}</p>
      <p>{delivery_price}</p>
      <p>{description}</p>
    </div>
  )
}

export default RestaurantItem
