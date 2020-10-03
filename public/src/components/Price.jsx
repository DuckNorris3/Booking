import React from 'react';
import styled from 'styled-components';
const Money = styled.div`
-webkit-align-items: center;
align-items: center;
display: flex;
color: #333333;
font-size: 14px;
font-weight: 700;
line-height: 0.9;
margin: 2px 0 0;
min-height: .6rem;`

const Price = ({price, nights, totals}) => {
  if(totals) {
    let avgPrice = totals/nights
    return(
      <div>
        <Money>${Math.floor(avgPrice)}</Money>
        <span>average per night</span>
      </div>
    )
  }
  return(
    <div>
      <Money>${price}</Money>
      <span>per night</span>
    </div>
  )
}

export default Price;