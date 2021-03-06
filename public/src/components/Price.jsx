import React from 'react';
import styled from 'styled-components';
import { SmallText, Money } from '../styling/styledComponents';

const Price = ({price, nights, total}) => {
  if (total) {
    let avgPrice = total/nights;
    return (
      <div>
        <Money>${Math.floor(avgPrice)}</Money>
        <SmallText>average per night</SmallText>
      </div>
    );
  }
  return (
    <div>
      <Money>${price}</Money>
      <SmallText>per night</SmallText>
    </div>
  );
};

export default Price;