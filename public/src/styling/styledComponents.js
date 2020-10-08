import styled, { css } from 'styled-components';

//Calendar Styles//

const Arrow = styled.div`
  cursor: pointer
  `;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div`
  width: 14.27%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  color: #333333;
  ${props =>
    props.initial &&
    css `
      height: 20px;
      font-size: 8px;
      cursor: none;
      border: none;
      width: 14.25%;
  `}
  ${props =>
    props.isAvailable &&
    css`
      &:hover {
        background-color: #40d9ac;
        color: #fff;
      }
    `}
  ${props =>
    props.isSelected &&
    css`
      background-color: #40d9ac;
      color: #fff;
    `}
  ${props =>
    props.isNotAvailable &&
    css`
        background-color: #ebebeb;
    `}
  `;

  const Frame = styled.div`
  border: 1px solid #ebebeb;
  border-top: none;
  box-shadow: 2px 2px 2px #eee;
${props =>
  props.render &&
  css`
    visibility: visible
    opacity: 1;
    height: auto;
    transition: all .6s ease-out;
  `}
  ${props =>
  props.hide &&
  css`
    visibility: hidden;
    opacity: 0;
    height: 0;
    transition: all .6s ;
  `}
`;

const Header = styled.div`
  font-size: 10px;
  font-weight: bold;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #ebebeb;
`;

// Price, Dates/Guests, BookingButton //

const Banner = styled.div`
  background-color: #fff;
  color: #757575;
  border: 1px solid #ebebeb;
  border-bottom: none;
  min-height: 30px;
  padding: 13px 10px;
`

const Button = styled.button`
  transition: background-color 0.4s ease 0s, border-color 0.5s ease 0s, color 0.4s ease 0s;
  background-color: #40d9ac;
  border: none;
  color: #fff;
  display: block;
  width: 100%;
  line-height: 1.3333333;
  padding: 10px 15px;
  position: relative;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  font-family: Calibre, Helvetica, Arial, sans-serif;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    color: #40d9ac;
    background-color: #fff;
    border: 2px solid #40d9ac;
  }
`;

const GuestCol = styled.div`
  padding: 10px 10px 10px 18px;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  position: relative;
  width: 260px;
  font-family: Calibre, Helvetica, Arial, sans-serif;
  z-index: 99;
  box-sizing: border-box;
`;

const DatesAndGuests = styled.div`
  background-color: white;
  border: 1px solid #ebebeb;
  padding: 0;
`;

const FlexRow = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-evenly;
  margin-left: 0;
  margin-right: 0;
`;
const Label = styled.div`
  font-size: 10px;
  font-weight: 800;
  cursor: pointer;
`;

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

const PlusMinus = styled.span`
  cursor: pointer;
  font-size: 10px;
${props => props.limit &&
  css`
  color: #ebebeb;
  cursor: none;
  `}
`;

const Prices = styled.span`
  color: black;
  font-size: 10px;
  font-weight: 800;
  &.right {
    font-weight: 400;
    float: right;
    padding-top: 5px;
  }
  &.red {
    font-weight: 400;
    color: red;
    float: right;
    padding-top: 5px;
  }
`;
const Select = styled.div`
  cursor: pointer;
`

const SmallText = styled.span`
  font-size: 10px;
  cursor: pointer;
`;

const Value = styled.span`
  font-size: 10px;
  padding: 0 10px;
`;
const Well = styled.div`
  box-sizing: border-box;
  background-color: white;
  border: 1px solid #ebebeb;
  border-top: none;
  padding: 10px;
  ${props =>
    props.render &&
    css`
      visibility: visible
      opacity: 1;
      transition: all .6s ease-out;
    `}
    ${props =>
    props.hide &&
    css`
      visibility: hidden;
      opacity: 0;
      transition: all .6s ;
    `}
`;

const Wrapper = styled.div`
  justify-content: space-between;
  width: 100%;
  display: flex;
`;


export {
  Arrow,
  Banner,
  Body,
  Button,
  GuestCol,
  Container,
  DatesAndGuests,
  Day,
  FlexRow,
  Frame,
  Header,
  Label,
  Money,
  PlusMinus,
  Prices,
  Select,
  SmallText,
  Value,
  Well,
  Wrapper
};