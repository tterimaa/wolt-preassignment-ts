import React from 'react'
import RestaurantItem from './RestaurantItem'
import nextId from 'react-id-generator'

interface RestaurantsProps {
  restaurants: Array<Restaurant>
}

const restaurantList: React.FC<RestaurantsProps> = ({ restaurants }) => {
  return (
    <div>
      <ul>
        {restaurants.map(restaurant => (
          <li key={nextId()}>
            <RestaurantItem name={restaurant.name}></RestaurantItem>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default restaurantList
