import React from 'react';
import styled from 'styled-components';
const Money = styled.div`
-webkit-align-items: center;
align-items: center;
display: flex;
color: #333333;
font-size: 26px;
line-height: 0.9;
margin: 2px 0 0;
min-height: 2.6rem;`

const Price = ({price}) => {
  return(
    <div>${price}</div>
  )
}

export default Price;