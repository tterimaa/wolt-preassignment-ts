import React from 'react'
import styles from './Layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <div className={styles.App}>
        <h1>My Restaurants App</h1>
        {children}
      </div>
      <footer className={styles.footer}>© Tarmo Terimaa, 2020</footer>
    </div>
  )
}

export default Layout
