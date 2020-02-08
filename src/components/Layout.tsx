import React from 'react'
import styles from '../css/Layout.module.css'
import Headroom from 'react-headroom'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Headroom>
        <nav>
          <h1>My Restaurants App</h1>
        </nav>
      </Headroom>
      <div className={styles.App}>{children}</div>
      <footer className={styles.footer}>© Tarmo Terimaa, 2020</footer>
    </div>
  )
}

export default Layout
