import React from 'react'
import Restaurant from './Restaurant'
import nextId from 'react-id-generator'

interface Props {
  restaurants: Array<RestaurantIf>
}

interface RestaurantIf {
  name: string
}

const restaurantList: React.FC<Props> = ({ restaurants }) => {
  return (
    <div>
      <ul>
        {restaurants.map(restaurant => (
          <li key={nextId()}>
            <Restaurant name={restaurant.name}></Restaurant>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default restaurantList
