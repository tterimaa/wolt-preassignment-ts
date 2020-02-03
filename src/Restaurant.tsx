import React from 'react'

interface Restaurant {
  name: string
}

const Restaurant: React.FC<Restaurant> = ({ name }) => {
  return <div>{name}</div>
}

export default Restaurant
