import React, { useEffect, useState } from 'react'
import Restaurants from './Restaurants'

const apiUrl = 'http://localhost:3001/restaurants'

const App: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Array<Restaurant>>([])

  useEffect(() => {
    async function fetchRestaurants(): Promise<void> {
      const response = await fetch(apiUrl)
      const restaurants = await response.json()
      setRestaurants(restaurants)
    }
    fetchRestaurants()
  }, [])
  return (
    <div className="App">
      <Restaurants restaurants={restaurants} />
    </div>
  )
}

export default App
