import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Value = styled.span`
  padding: 0 10px;
`;
const PlusMinus = styled.span`
${props => props.limit &&
  css`
  color: #ebebeb;
  cursor: none;
  `}
  cursor: pointer;
`;

function  Guests({maxGuests}) {
  const [count, setCount] = useState(1);
  return (
    <div>
      <div className="label">Guests</div>
      <a>
        <PlusMinus limit= {count <= 1} onClick={ () => count > 1 ? setCount(count - 1) : {} }>
          -
        </PlusMinus>
      </a>
      <Value>
        {count}
      </Value>
      <a>
        <PlusMinus limit= { count >= maxGuests } onClick={ () => count < maxGuests ? setCount(count + 1) : {} }>
          +
        </PlusMinus>
      </a>
    </div>
  )
}

export default Guests;