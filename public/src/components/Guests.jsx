import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import {
  Label,
  PlusMinus,
  Value
} from '../styling/styledComponents';

function  Guests({maxGuests}) {
  const [count, setCount] = useState(1);
  return (
    <div>
      <Label>
        Guests
      </Label>
      <a>
        <PlusMinus
        limit= {count <= 1}
        onClick={ () => count > 1 ? setCount(count - 1) : {} }
        >
          -
        </PlusMinus>
      </a>
      <Value>
        {count}
      </Value>
      <a>
        <PlusMinus
        limit= { count >= maxGuests }
        onClick={ () => count < maxGuests ? setCount(count + 1) : {} }
        >
          +
        </PlusMinus>
      </a>
    </div>
  );
};

export default Guests;