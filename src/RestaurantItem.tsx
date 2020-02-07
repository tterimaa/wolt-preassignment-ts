import React from 'react'
import { Restaurant } from './types'
import styles from './css/RestaurantItem.module.css'

const RestaurantItem: React.FC<Restaurant> = ({ name, image, city, delivery_price, description, currency, tags }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.header}>
        <h2>{name}</h2>
        <span>{city}</span>
      </div>
      <div className={styles.description}>
        <h3>{description}</h3>
      </div>
      <div className={styles.info}>
        {tags.map(tag => (
          <span key={tag}>{tag} </span>
        ))}
        <p>{`Cheap delivery: ${delivery_price}${currency}`}</p>
      </div>
    </div>
  )
}

export default RestaurantItem
