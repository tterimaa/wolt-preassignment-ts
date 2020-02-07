import React from 'react'
import Restaurants from './Restaurants'
import Layout from './Layout'

const App: React.FC = () => {
  return (
    <Layout>
      <div className="App">
        <Restaurants />
      </div>
    </Layout>
  )
}

export default App
