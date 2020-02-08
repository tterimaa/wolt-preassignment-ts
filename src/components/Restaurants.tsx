import React, { useEffect, useState } from 'react'
import RestaurantItem from './RestaurantItem'
import nextId from 'react-id-generator'
import { Restaurant, SortRules, AlphabeticallyRules } from '../types'
import styles from '../css/Restaurants.module.css'
import { formatRestaurants } from '../helper'

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
      setRestaurants(formatRestaurants(restaurants))
    }
    setDefaults()
  }, [])
  return (
    <div className={styles.restaurantsContainer}>
      <span>
        Sort by name:{' '}
        <button onClick={(): void => sortAlphabetically(restaurants)}>
          {sortRules.alphabetically === AlphabeticallyRules.Ascending
            ? AlphabeticallyRules.Descending
            : AlphabeticallyRules.Ascending}
        </button>
      </span>
      <ul className={styles.RestaurantsGrid}>
        {restaurants.map(restaurant => (
          <li key={nextId()} className={styles.gridElement}>
            <RestaurantItem
              name={restaurant.name}
              city={restaurant.city}
              image={restaurant.image}
              deliveryPrice={restaurant.deliveryPrice}
              description={restaurant.description}
              currency={restaurant.currency}
              tags={restaurant.tags}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Restaurants
