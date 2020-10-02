import React from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Frame = styled.div`
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
`;

const Header = styled.div`
  font-size: 10px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  cursor: pointer
  `;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div`
  width: 14.2%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
    ${props =>
    props.isSelected &&
    css`
      background-color: #40d9ac;
      color: #fff;
    `}
    ${props =>
      props.isNotAvailable &&
      css`
          background-color: lightgrey;
          color: grey;
          &:before {
            content: "";
            border-bottom: 1px solid #333333;
            position: absolute;
            left: 15px;
            top: 6px;
            width: 25px;
            height: 16px;
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
          }
      `}
  `;

  export function Calendar({showCalendar, handleClick, availability, checkIn, checkOut, checkInSelect, checkOutSelect}) {
    const DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_OF_THE_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const today = new Date();
    const [date, setDate] = useState(today);
    const [day, setDay] = useState(date.getDate());
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
    const [startDay, setStartDay] = useState(getFirstDayOfMonth(date));
    const [dateSend, setDateSend] = useState(null);
    const [selected, setSelected] = useState(null);
    //const [openDay, setOpenDay] = useState(null);

    useEffect(() => {
      setDay(date.getDate());
      setMonth(date.getMonth());
      setYear(date.getFullYear());
      setStartDay(getFirstDayOfMonth(date));
    }, [date]);

    useEffect(() => {
      setDateSend(grabDate(selected, checkInSelect, checkOutSelect))
    }, [selected]);

    function grabDate(selected, checkInSelect, checkOutSelect) {
      if (checkInSelect || checkOutSelect){
        handleClick(selected);
        return selected;
      }
    }

    function getFirstDayOfMonth(date) {
      return new Date(date.getFullYear(), date.getMonth(), 1).getDay() + 1;
    }

    //onClick function which saves date value and passes it to Appf
    if (!showCalendar) {
      return null;
    } else {
      return (
        <Frame>
          <Header>
            <Button onClick={() => setDate(new Date(year, month - 1, 1))}>&lt;</Button>
            <div>
              {MONTHS[month]} {year}
            </div>
            <Button onClick={() => setDate(new Date(year, month + 1, 1))}>&gt;</Button>
          </Header>
          <Body>
            {DAYS_OF_THE_WEEK.map((d, index) => (
              <Day key={index}>
                <strong>{d}</strong>
              </Day>
            ))}
            {Array(DAYS[month] + (startDay - 1))
            .fill(null)
            .map((_, index) => {
              const d = index - (startDay - 2);
              const evalDay = new Date(year, month, d).toString().split(' ').slice(0, 4).join(' ');
              const available = availability[evalDay];
              let nextDay = checkIn ? new Date(checkIn.toString()).getDate() + 1 : null;

              return (
                <Day
                  key= {index}
                  isSelected={d === day || checkIn ? checkIn === evalDay : false || checkOut ? checkOut === evalDay : false}
                  isNotAvailable= {!available && d !== nextDay}
                  onClick={() => {
                      if (available || nextDay) {
                        if (checkIn && !checkOut) {
                          let comparisonDate = new Date(checkIn.toString());
                          let prospectiveDate = new Date(year, month, d);
                          while (comparisonDate < prospectiveDate) {
                            let date = comparisonDate.toString().split(' ').slice(0, 4).join(' ')
                            if (!availability[comparisonDate.toString().split(' ').slice(0, 4).join(' ')]) {
                              debugger;
                              //something needs to happen here to handle this situation
                              return;
                            }
                            comparisonDate.setDate(comparisonDate.getDate() + 1);
                          }
                        }
                        setSelected(new Date(year, month, d));
                      }
                    }
                  }
                >
                  {d > 0 ? d : ''}
                </Day>
              );
            })}
          </Body>
        </Frame>
      );
    }
  }
