import React from 'react'
import styled from 'styled-components'


const StyledIndicatorList = styled.div`

margin-bottom: 0.25em;
min-height: 1em;
line-height: 1;
opacity: 0.4;
  font-size: 0.75em;
  line-height: 1;
  opacity: 0.4;
  text-align: right;
  display: flex;
  justify-content: space-between;
`

const StyledExpression = styled.span`
  margin-left: auto;
`



const StyledDisplay = styled.div`

  padding: 1.5em 1em;
  background-color: #393939;
  color: #fff;
`

const StyleScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;  
  font-size: 2.5em;
  min-height: 1.4em;
  overflow: hidden;
`

export const Screen = ({ value, expression }) => {
    return (
        <StyledDisplay>
            <StyledIndicatorList>
                <StyledExpression>
                    {expression}
                </StyledExpression>
            </StyledIndicatorList>

            <StyleScreen>
                {value}
            </StyleScreen>
        </StyledDisplay>
    )
}

export default Screen