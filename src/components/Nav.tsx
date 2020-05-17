import React from 'react'
import SimpleButton from './atoms/Button'

const Nav: React.FC<{}> = () => {
  return (
    <nav>
      <p>これはなびです</p>
      <SimpleButton></SimpleButton>
    </nav>
  )
}

export default Nav
