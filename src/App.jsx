import React, {useState } from 'react'
import styled from 'styled-components'
import Pad from './components/ButtonPad'
import Button from './components/Button'

import './App.css';

const StyledApp = styled.div`
  font-size: 16px;
  width: 100%;
  max-width: 320px;
`


function App() {

  const [expression, setExp] = useState("");
  const [output, setOutput] = useState("");

  const onClickKeypad = (e) => {

    var val = parseInt(e.target.value)

    if (isNaN(val)) {
      switch (e.target.value) {
        case 'c':
          setOutput('')
          setExp('');
          break;
        case '=':
          evaluate(expression)
          break;
        case '-':
          appendExp(e)
          break;
        case '+':
          appendExp(e)
          break;
        case '*':
          appendExp(e)
          break;
        case '/':
          appendExp(e)
          break;

      }
    }
    else {
      appendExp(e)
    }

  }

  const evaluate = (e) => {
    try {
      let exp = e.split('')
      let opr = exp.filter((value) => { return isNaN(parseInt(value)) })
      exp = e.split(opr[0])
      let result = 0;
      switch (opr[0]) {
        case '*':
          result = parseInt(exp[0]) * parseInt(exp[1])
          setOutput(result)
          break;
        case '/':
          result = parseInt(exp[0]) / parseInt(exp[1])
          setOutput(result)
          break;
        case '-':
          result = parseInt(exp[0]) - parseInt(exp[1])
          setOutput(result)
          break;
        case '+':
          result = parseInt(exp[0]) + parseInt(exp[1])
          setOutput(result)
          break;
      }
    } catch (e) {
      console.error(e)
    }
  }

  const appendExp = (e) => {
    let tExp = expression
    tExp += e.target.value;
    setExp(tExp)
  }

  return (
    <StyledApp>
      <Pad></Pad>
    </StyledApp>
  );
}

export default App;
