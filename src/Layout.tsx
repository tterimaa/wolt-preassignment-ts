import React from 'react'
import styles from './Layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <nav className={styles.nav}>
        <h2>My Restaurants App</h2>
      </nav>
      <div className={styles.App}>{children}</div>
      <footer className={styles.footer}>© Tarmo Terimaa, 2020</footer>
    </div>
  )
}

export default Layout
