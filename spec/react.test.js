import TestRenderer from 'react-test-renderer';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter} from 'react-router';
configure({ adapter: new Adapter() });

import App from '../public/src/components/App.jsx';
import { calculateNights } from '../public/src/utilityFunctions/priceUtilities.js'

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
    expect(calculateNights('Wed Oct 07 2020', 'Mon Oct 05 2020')).toBe(2);
  })
});

//unit test-- for utilities -- make sure to include scenarios where it could potentially (include 0 input for nights)



