import React, {useEffect} from 'react'
import styled from 'styled-components'
import Button from '../Button'

const StyledPad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
`

export const Pad = ({
    onDigitButtonClick,
    onPointButtonClick,
    onOperatorButtonClick,
    onChangeSignButtonClick,
    onEqualButtonClick,
    onAllClearButtonClick,
    onClearEntryButtonClick,
  }) => {
    const handleKeyDown = ({ keyCode, shiftKey }) => {
      console.log(keyCode)
      if (keyCode >= 48 && keyCode <= 57 && !shiftKey) {
        onDigitButtonClick((keyCode - 48))
      } else if ((keyCode >= 96 && keyCode <= 105)) {
        onDigitButtonClick((keyCode - 96))
      } else if (keyCode === 107 || (keyCode === 187 && shiftKey)) {
        onOperatorButtonClick('+')
      } else if (keyCode === 109 || keyCode === 189) {
        onOperatorButtonClick('-')
      } else if (keyCode === 106 || (keyCode === 56 && shiftKey)) {
        onOperatorButtonClick('×')
      } else if (keyCode === 111 || keyCode === 191) {
        onOperatorButtonClick('÷')
      } else if (keyCode === 13 || (keyCode === 187 && !shiftKey)) {
        onEqualButtonClick()
      } else if (keyCode === 46) {
        onClearEntryButtonClick()
      } else if (keyCode === 27) {
        onAllClearButtonClick()
      } 
    }
  
    useEffect(() => {
      document.body.addEventListener('keydown', handleKeyDown)
      return () => document.body.removeEventListener('keydown', handleKeyDown)
    })
  
    return (
      <StyledPad>
        <Button color="red" onClick={onAllClearButtonClick}>
          AC
        </Button>
        <Button onClick={onClearEntryButtonClick}>
          C
        </Button>
        <Button color="dark" onClick={() => onOperatorButtonClick('÷')}>
          ÷
        </Button>
        <Button onClick={() => onDigitButtonClick(7)}>
          7
        </Button>
        <Button onClick={() => onDigitButtonClick(8)}>
          8
        </Button>
        <Button onClick={() => onDigitButtonClick(9)}>
          9
        </Button>
        <Button color="dark" onClick={() => onOperatorButtonClick('×')}>
          ×
        </Button>
        <Button onClick={() => onDigitButtonClick(4)}>
          4
        </Button>
        <Button onClick={() => onDigitButtonClick(5)}>
          5
        </Button>
        <Button onClick={() => onDigitButtonClick(6)}>
          6
        </Button>
        <Button color="dark" onClick={() => onOperatorButtonClick('-')}>
          -
        </Button>
        <Button onClick={() => onDigitButtonClick(1)}>
          1
        </Button>
        <Button onClick={() => onDigitButtonClick(2)}>
          2
        </Button>
        <Button onClick={() => onDigitButtonClick(3)}>
          3
        </Button>
        <Button color="dark" onClick={() => onOperatorButtonClick('+')}>
          +
        </Button>
        <Button onClick={() => onDigitButtonClick(0)}>
          0
        </Button>
        <Button onClick={onPointButtonClick}>
          .
        </Button>
        <Button color="green" isLarge={true} onClick={onEqualButtonClick}>
          =
        </Button>
      </StyledPad>
    )
  }
  
  export default Pad