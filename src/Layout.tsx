import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <nav>
        <h2>My Restaurants App</h2>
      </nav>
      {children}
      <footer>
        <p>© Tarmo Terimaa, 2020</p>
      </footer>
    </>
  )
}

export default Layout
