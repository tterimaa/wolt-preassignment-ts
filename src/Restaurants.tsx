import React, { useEffect, useState } from 'react'
import RestaurantItem from './RestaurantItem'
import nextId from 'react-id-generator'
import { Restaurant } from './types'

const apiUrl = 'http://localhost:3001/restaurants'

const Restaurants: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    async function startSetRestaurants(): Promise<void> {
      const response = await fetch(apiUrl)
      const restaurants = await response.json()
      setRestaurants(restaurants)
    }
    startSetRestaurants()
  }, [])
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

export default Restaurants
