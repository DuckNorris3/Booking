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
    props.isCheckIn &&
    css`
      background-color: #40d9ac;
      color: #fff;
    `}
    ${props =>
      props.isCheckOut &&
      css`
        background-color: #40d9ac;
        color: #fff;
      `}
    ${props =>
      props.isNotAvailable &&
      css`
        background-color: lightgrey;
        color: grey;
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
    //const [openDay, setOpenDay] = useState(null);

    useEffect(() => {
      setDay(date.getDate());
      setMonth(date.getMonth());
      setYear(date.getFullYear());
      setStartDay(getFirstDayOfMonth(date));
      setDateSend(grabDate(date, checkInSelect, checkOutSelect))
    }, [date]);


    function grabDate(date, checkInSelect, checkOutSelect) {
      if (checkInSelect || checkOutSelect){
        handleClick(date);
        return date;
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
            <Button onClick={() => setDate(new Date(year, month - 1, day))}>Prev</Button>
            <div>
              {MONTHS[month]} {year}
            </div>
            <Button onClick={() => setDate(new Date(year, month + 1, day))}>Next</Button>
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
              console.log("open a day", nextDay)
              return (
                <Day
                  key= {index}
                  isToday={d === today.getDate()}
                  isSelected={d === day}
                  isCheckIn={checkIn ? checkIn === evalDay : false}
                  isCheckOut={checkOut ? checkOut === evalDay : false}
                  isNotAvailable= {!available && d !== nextDay}
                  onClick={() => {
                      if (available || nextDay) {
                        if (checkIn && !checkOut) {
                          let comparisonDate = new Date(checkIn.toString());
                          let prospectiveDate = new Date(year, month, d);
                          while (comparisonDate < prospectiveDate) {
                            let date = comparisonDate.toString().split(' ').slice(0, 4).join(' ')
                            //console.log(`${date} is available ${availability[date]}`)
                            if (!availability[comparisonDate.toString().split(' ').slice(0, 4).join(' ')]) {
                              debugger;
                              return;
                            }
                            comparisonDate.setDate(comparisonDate.getDate() + 1);
                            console.log("DAYS to compare", comparisonDate)
                          }
                        }
                        setDate(new Date(year, month, d));
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
