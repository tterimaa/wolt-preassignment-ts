import React from 'react'
import { Restaurant } from '../types'
import styles from '../css/RestaurantItem.module.css'

const RestaurantItem: React.FC<Restaurant> = ({ name, image, city, deliveryPrice, description, tags }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.header}>
        <h2>{name}</h2>
        <span>{city}</span>
      </div>
      <div className={styles.info}>
        <h3>{description}</h3>
        <p>{`Cheap delivery: ${deliveryPrice}`}</p>
      </div>
      <div className={styles.tags}>
        {tags.map(tag => (
          <div key={tag}>{tag} </div>
        ))}
      </div>
    </div>
  )
}

export default RestaurantItem
