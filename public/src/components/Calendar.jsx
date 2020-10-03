import React from 'react';
import { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import {Arrow, Body,Day, Frame, Header, SmallText} from '../styling/styledComponents.js';
import Tooltip from "react-simple-tooltip";

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
    const [render, setRender] = useState(false);

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
    };

    function getFirstDayOfMonth(date) {
      return new Date(date.getFullYear(), date.getMonth(), 1).getDay() + 1;
    };

    //onClick function which saves date value and passes it to Appf
    return (
      <Frame
        render= {showCalendar}
        hide= {!showCalendar}
      >
        <Header>
          <Arrow
          onClick={() => setDate(new Date(year, month - 1, 1))}>
            &lt;
          </Arrow>
          <div>
            {MONTHS[month]} {year}
          </div>
          <Arrow
          onClick={() => setDate(new Date(year, month + 1, 1))}>
            &gt;
          </Arrow>
        </Header>
        <Body>
          {DAYS_OF_THE_WEEK.map((d, index) => (
            <Day
            key={index}
            initial={true}
            >
              <strong>{d}</strong>
            </Day>
          ))}
          {Array(DAYS[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            const evalDay = new Date(year, month, d);
            const stringDay = evalDay.toString().split(' ').slice(0, 4).join(' ');
            const weekDay = evalDay.getDay() > 0 && evalDay.getDay() < 6;
            const nextDay = checkIn ? new Date(checkIn.toString()).getDate() + 1 : null;
            const available = availability[stringDay];
            function dateClick() {
              if (available || nextDay) {
                if (checkIn && !checkOut) {
                  let comparisonDate = new Date(checkIn.toString());
                  let prospectiveDate = new Date(year, month, d);
                  while (comparisonDate < prospectiveDate) {
                    let date = comparisonDate.toString().split(' ').slice(0, 4).join(' ')
                    if (!availability[comparisonDate.toString().split(' ').slice(0, 4).join(' ')]) {
                      //something needs to happen here to handle this situation
                      return;
                    }
                    comparisonDate.setDate(comparisonDate.getDate() + 1);
                  }
                }
                setSelected(new Date(year, month, d));
              }
            };
            if (weekDay && available) {
              return (
                <Day
                  key= {index}
                  isSelected={d === day || checkIn ? checkIn === stringDay : false || checkOut ? checkOut === stringDay : false}
                  isAvailable= {available || nextDay}
                  onClick={() => dateClick() }
                >
                  <Tooltip
                    content="Weeknight Savings!"
                    arrow= {5}
                    padding= {2}
                    fadeDuration= {100}
                    customCss={css`
                    white-space: nowrap;
                    font-size: 8px;
                    transition: background-color 0.2s ease 0s, color 0.2s ease 0s;
                    `}
                  >
                    <SmallText>{d}</SmallText>
                  </Tooltip>
                </Day>
              );
            } else if (available) {
              return (
                <Day
                  key= {index}
                  isSelected={d === day || checkIn ? checkIn === stringDay : false || checkOut ? checkOut === stringDay : false}
                  isAvailable= {available || nextDay}
                  onClick={ () => dateClick() }
                >
                  <SmallText>{d}</SmallText>
                </Day>
              );
            } else {
              return (
                <Day
                  key= {index}
                  isNotAvailable= {!available && d !== nextDay}
                  onClick={ () => dateClick() }
                >
                  <SmallText>{d > 0 ? d : DAYS[month - 1] + d}</SmallText>
                </Day>
              );
            }
          })};
        </Body>
      </Frame>
    );
  };

