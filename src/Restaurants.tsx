import React, { useEffect, useState } from 'react'
import RestaurantItem from './RestaurantItem'
import nextId from 'react-id-generator'
import { Restaurant, SortRules, AlphabeticallyRules } from './types'
import styles from './Restaurants.module.css'

const apiUrl = 'http://localhost:3001/restaurants'

const Restaurants: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [sortRules, setSortRules] = useState<SortRules>({ alphabetically: AlphabeticallyRules.Unordered })

  const sortAlphabetically = (restaurantsArray: Restaurant[]): void => {
    if (
      sortRules.alphabetically === AlphabeticallyRules.Descending ||
      sortRules.alphabetically === AlphabeticallyRules.Unordered
    ) {
      setSortRules({ alphabetically: AlphabeticallyRules.Ascending })
      setRestaurants(restaurantsArray.sort((a, b) => (a.name >= b.name ? 1 : -1)))
    } else {
      setSortRules({ alphabetically: AlphabeticallyRules.Descending })
      setRestaurants(restaurantsArray.sort((a, b) => (a.name >= b.name ? -1 : 1)))
    }
  }

  useEffect(() => {
    async function setDefaults(): Promise<void> {
      const response = await fetch(apiUrl)
      const restaurants = await response.json()
      setRestaurants(restaurants)
    }
    setDefaults()
  }, [])
  return (
    <div>
      <button onClick={(): void => sortAlphabetically(restaurants)}>Sort</button>
      <span>Sort order: {sortRules.alphabetically}</span>
      <ul className={styles.RestaurantsGrid}>
        {restaurants.map(restaurant => (
          <li key={nextId()} className={styles.gridElement}>
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
