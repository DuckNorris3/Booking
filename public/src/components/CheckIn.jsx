import React from 'react';
import styled from 'styled-components';
import { Select, SmallText, Label } from '../styling/styledComponents';

const CheckIn = ({checkIn, handleClick, showCalendar, checkInSelect}) => {
  if (!checkIn) {
    return (
      <Select onClick= { () => handleClick() }>
        <Label>
          Check in
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
      Check in
    </Label>
    <SmallText>
      {checkIn.split(' ').slice(1,3).join(' ')}
    </SmallText>
  </Select>
  );
};

export default CheckIn;