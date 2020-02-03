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
            <RestaurantItem
              name={restaurant.name}
              city={restaurant.city}
              image={restaurant.image}
              delivery_price={restaurant.delivery_price}
              description={restaurant.description}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default restaurantList
