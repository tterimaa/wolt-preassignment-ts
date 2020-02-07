import React from 'react'
import { Restaurant } from './types'
import styles from './RestaurantItem.module.css'

const RestaurantItem: React.FC<Restaurant> = ({ name, image, city, delivery_price, description }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.image} />
      <h2 className={styles.header}>{name}</h2>
      <div className={styles.info}>
        <p>{city}</p>
        <p>Super fast delivery: {delivery_price}€</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default RestaurantItem
