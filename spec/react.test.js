import TestRenderer from 'react-test-renderer';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter} from 'react-router';
configure({ adapter: new Adapter() });

import App from '../public/src/components/App.jsx';
import {
  calculateNights,
  calculateDiscount,
  calculateTotal
 } from '../public/src/utilityFunctions/priceUtilities.js'

describe('test front end', () => {
  test('nothing is real', () => {
    expect(true).toBe(true);
  });

  test('Components exist in App', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries= {[ '/36' ]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find('CheckIn')).toBeTruthy();
    expect(wrapper.find('CheckOut')).toBeTruthy();
    expect(wrapper.find('Calendar')).toBeTruthy();
    expect(wrapper.find('Price')).toBeTruthy();
    expect(wrapper.find('Totals')).toBeTruthy();
    expect(wrapper.find('Guests')).toBeTruthy();
    expect(wrapper.find('BookButton')).toBeTruthy();
  });

  test('calculateNights returns nights btwn checkIn and checkOut dates', () => {
    expect(calculateNights('Mon Oct 05 2020', 'Wed Oct 07 2020')).toBe(2);
  })

  test('calculateDiscount returns amount saved for all weeknight stay', () => {
    expect(calculateDiscount(50, .2, 'Mon Oct 05 2020', 'Wed Oct 07 2020')).toBe(20);
  })

  test('calculateDiscount returns amount saved for mixed weeknights and weekends', () => {
    expect(calculateDiscount(50, .2, 'Sat Oct 10 2020', 'Tues Oct 13 2020')).toBe(10);
  })

  test('calculateDiscount returns 0 if price is 0', () => {
    expect(calculateDiscount(0, .2, 'Mon Oct 05 2020', 'Wed Oct 07 2020')).toBe(0);
  })

  test('if there is a discount, calculateTotal returns total less discount total', () => {
    expect(calculateTotal(4, 50, 30)).toBe(170);
  })

  test('if no nights entered, calculateTotal returns 0', () => {
    expect(calculateTotal(0, 50, 30)).toBe(0);
  })

});

//unit test-- for utilities -- make sure to include scenarios where it could potentially (include 0 input for nights)



