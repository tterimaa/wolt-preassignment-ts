import React from 'react'
import { Restaurant } from './types'
import styles from './css/RestaurantItem.module.css'

const RestaurantItem: React.FC<Restaurant> = ({ name, image, city, delivery_price, description, currency, tags }) => {
  const moveDecimal = (num: number): number => num / Math.pow(10, num.toString().length - 1)
  const formattedPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency,
  }).format(moveDecimal(delivery_price))
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
      <div className={styles.tags}>
        {tags.map(tag => (
          <div key={tag}>{tag} </div>
        ))}
      </div>
      <div className={styles.info}>
        <p>{`Cheap delivery: ${formattedPrice}`}</p>
      </div>
    </div>
  )
}

export default RestaurantItem
