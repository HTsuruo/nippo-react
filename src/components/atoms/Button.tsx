import React from 'react'
import { Button } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'

const SimpleButton: React.FC<{}> = () => {
  return <ThemeButton color="primary">サインイン</ThemeButton>
}

const ThemeButton = styled(Button)({
  background: '#FFFFFF',
  border: '1px solid #000000',
  borderRadius: 4,
  color: '#000000',
  height: 44,
  padding: '0 30px',
})

export default SimpleButton
