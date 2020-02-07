import React from 'react'
import Restaurants from './Restaurants'
import Layout from './Layout'
import './global.css'

const App: React.FC = () => {
  return (
    <Layout>
      <Restaurants />
    </Layout>
  )
}

export default App
