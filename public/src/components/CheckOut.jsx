import React from 'react';
import { SmallText, Label } from '../styling/styledComponents';

const CheckOut = ({checkOut, handleClick, showCalendar}) => {
  if (!checkOut) {
    return (
      <div onClick= { () => handleClick() }>
        <Label>Check out</Label>
        <SmallText>Select date</SmallText>
      </div>
    )
  }
  return (
    <div onClick= { () => handleClick() }>
        <Label>Check out</Label>
      <SmallText>{checkOut.split(' ').slice(1,3).join(' ')}</SmallText>
    </div>
    )
  }


export default CheckOut;