import React from 'react';
import {
  Select,
  SmallText,
  Label
} from '../styling/styledComponents';

const CheckOut = ({checkOut, handleClick, calendarVisible}) => {
  if (!checkOut) {
    return (
      <Select onClick= { () => handleClick() }>
        <Label>
          Check out
          </Label>
        <SmallText>
          Select date
        </SmallText>
      </Select>
    );
  }
  return (
    <Select onClick= { () => handleClick() }>
        <Label>
          Check out
          </Label>
      <SmallText>
        {checkOut.split(' ').slice(1,3).join(' ')}
      </SmallText>
    </Select>
    );
  };

export default CheckOut;