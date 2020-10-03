import React from 'react';
import styled from 'styled-components';
import { SmallText, Label } from '../styling/styledComponents';

const CheckIn = ({checkIn, handleClick, showCalendar, checkInSelect}) => {
  if (!checkIn) {
    return (
      <div onClick= { () => handleClick() }>
        <Label>
          Check in
        </Label>
        <SmallText>
          Select date
        </SmallText>
      </div>
    );
  }
  return (
  <div onClick= { () => handleClick() }>
    <Label>
      Check in
    </Label>
    <SmallText>
      {checkIn.split(' ').slice(1,3).join(' ')}
    </SmallText>
  </div>
  );
};

export default CheckIn;