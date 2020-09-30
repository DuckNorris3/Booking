import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// const DatesGuests = styled.div`
//   box-sizing: border-box;
//   padding: .2em .6em .3em;
//   line-height: 1;
//   white-space: nowrap;
//   vertical-align: baseline;
//   font-family: "Calibre", Helvetica, Arial, sans-serif;
// `;
const Value = styled.span`
  padding: 2px;
`;
const Change = styled.span`
  cursor: pointer;
  padding: 2px;
`;
const Limit = styled.span`
  color: grey;
  padding: 2px;
`;

function  Guests({maxGuests}) {
  const [count, setCount] = useState(1);
  if (count <= 1){
    return (
      <div>
        <div className="label">Guests</div>
        <a><Limit >-</Limit></a><Value>{count}</Value><a><Change onClick={() => setCount(count + 1)}>+</Change></a>
      </div>
    )
  }
  else if (count >= maxGuests) {
    return (
      <div>
        <div className="label">Guests</div>
        <a><Change onClick={() => setCount(count - 1)}>-</Change></a><span>{count}</span><a><Limit>+</Limit></a>
      </div>
    )
  } else {
    return (
      <div>
        <div className="label">Guests</div>
        <a><Change onClick={() => setCount(count - 1)}>-</Change></a><span>{count}</span><a><Change onClick={() => setCount(count + 1)}>+</Change></a>
      </div>
    )
  }
}


export default Guests;