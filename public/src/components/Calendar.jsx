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
    props.isToday &&
    css`
      border: 1px solid #eee;
    `}
  ${props =>
    props.isSelected &&
    css`
      background-color: #eee;
    `}
  `;

  export function Calendar({showCalendar, handleClick}) {
    const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_OF_THE_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const today = new Date();
    const [date, setDate] = useState(today);
    const [day, setDay] = useState(date.getDate());
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
    const [startDay, setStartDay] = useState(getFirstDayOfMonth(date));
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [selectionCount, setSelectCount] = useState(0);

    useEffect(() => {
      setDay(date.getDate());
      setMonth(date.getMonth());
      setYear(date.getFullYear());
      setStartDay(getFirstDayOfMonth(date));
      setCheckIn(grabCheckIn(date, checkIn, selectionCount));
      setCheckOut(grabCheckOut(date, checkOut, selectionCount));
    }, [date]);



    function grabCheckIn(date, checkIn, selectionCount) {
      if (selectionCount === 1){
        handleClick(date);
        return date;
      } else {
        return checkIn;
      }
    }

    function grabCheckOut(date, checkOut, selectionCount) {
      if (selectionCount === 2){
        handleClick(date);
        return date;
      } else {
        return checkOut;
      }
    }

    console.log(checkIn, "<----checkin", checkOut, "<---- checkout");

    function getFirstDayOfMonth(date) {
      console.log("selected date and month", date)
      // console.log("first day of the month", new Date(`${date.getFullYear()}-${date.getMonth() + 1}-1` ))
      return new Date(`${date.getFullYear()}-${date.getMonth() + 1}-1` ).getDay();
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
              return (
                <Day
                  key={index}
                  isToday={d === today.getDate()}
                  isSelected={d === day}
                  onClick={() => {
                      setDate(new Date(year, month, d));
                      setSelectCount(selectionCount + 1)
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


