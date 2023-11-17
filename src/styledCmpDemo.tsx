import React, { FC } from 'react'
import styled, { css } from 'styled-components'

interface ButtonPropsType {
  primary?: boolean
}

const Button = styled.button<ButtonPropsType>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid red;
  color: red;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: yellow;
      color: white;
      border: none;
    `}
`

const Container = styled.div`
  text-align: center;
`

export const StyledCmpDemo: FC = () => {
  return (
    <div>
      <p>a styled component demo</p>
      <Container>文字居中</Container>
      <Button>按钮</Button>
      <Button primary>按钮</Button>
    </div>
  )
}
