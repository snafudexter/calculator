import React, { useState } from 'react';

import './App.css';

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
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-md-3">
          <div className="form-group">
            <input className="form-control" type="text" value={expression} onChange={e => setExp(e.target.value)} />
          </div>
          <div className="form-group">
            <input className="form-control" type="text" value={output} disabled />
          </div>
          
      <div className="row">
        <div className="d-flex col-md-8">
          <button className="btn btn-primary m-1 p-3" value="c" onClick={onClickKeypad} >C</button>
          <button className="btn btn-primary m-1 p-3" value="d" onClick={onClickKeypad} >D</button>
          <button className="btn btn-primary m-1 p-3" value="=" onClick={onClickKeypad} >=</button>
          <button className="btn btn-primary m-1 p-3" value="+" onClick={onClickKeypad} >+</button>
        </div>
        <div className="d-flex col-md-8">
          <button className="btn btn-primary m-1 p-3" value="7" onClick={onClickKeypad} >7</button>
          <button className="btn btn-primary m-1 p-3" value="8" onClick={onClickKeypad} >8</button>
          <button className="btn btn-primary m-1 p-3" value="9" onClick={onClickKeypad} >9</button>
          <button className="btn btn-primary m-1 p-3" value="/" onClick={onClickKeypad} >/</button>
        </div>
        <div className="d-flex col-md-8">
          <button className="btn btn-primary m-1 p-3" value="4" onClick={onClickKeypad} >4</button>
          <button className="btn btn-primary m-1 p-3" value="5" onClick={onClickKeypad} >5</button>
          <button className="btn btn-primary m-1 p-3" value="6" onClick={onClickKeypad} >6</button>
          <button className="btn btn-primary m-1 p-3" value="*" onClick={onClickKeypad} >*</button>
        </div>
        <div className="d-flex col-md-8">
          <button className="btn btn-primary m-1 p-3" value="1" onClick={onClickKeypad}>1</button>
          <button className="btn btn-primary m-1 p-3" value="2" onClick={onClickKeypad}>2</button>
          <button className="btn btn-primary m-1 p-3" value="3" onClick={onClickKeypad}>3</button>
          <button className="btn btn-primary m-1 p-3" value="-" onClick={onClickKeypad}>-</button>
        </div>
      </div>
        </div>
      </div>

    </div>
  );
}

export default App;
