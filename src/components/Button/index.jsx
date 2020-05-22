import React from 'react'

import styled, { css } from 'styled-components'

const colToCss = (color) => {
    switch (color) {

        case 'green':
            return css`
        background-color: #018645;
        color: #fff;
        &:hover,
        &:focus {
          background-color: #016d38;
        }
      `
        case 'red':
            return css`
        background-color: #c04444;
        color: #fff;
        &:hover,
        &:focus {
          background-color: #af3b3b;
        }
      `
        case 'dark':
            return css`
        background-color: #272727;
        color: #c5830d;
        &:hover,
        &:focus {
          background-color: #1a1a1a;
        }
      `
    }

    return css`
    background-color: #2e2e2e;
    color: #fff;
    &:hover,
    &:focus {
      background-color: #212121;
    }
  `
}

export const Button = styled.button`

  font-family: inherit;
  padding-bottom: 1em;
  transition: background-color 0.15s ease-in-out, opacity 0.15s ease-in-out;
  font-size: inherit;
  border-radius: 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding-top: 1em;

  ${({ color }) => colToCss(color)}
  ${({ isLarge }) => isLarge && css`
    grid-column-end: span 2;
  `}
  &:focus {
    outline: 0;
  }
  &:active {
    opacity: 0.9;
  }
`

export const StyledButton = ({ children, color, isLarge, onClick }) => {
    return (
        <Button color={color} isLarge={isLarge} onClick={onClick}>
            {children}
        </Button>
    )
}

export default Button