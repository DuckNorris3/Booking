import TestRenderer from 'react-test-renderer';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import App from '../public/src/components/App.jsx';
import Calendar from '../public/src/components/Calendar.jsx';

describe('test front end', () => {
  test('nothing is real', () => {
    expect(true).toBe(true);
  });

  test('Components exist in App', () => {
    let wrapper = mount(<App />);
    expect(wrapper.find('CheckIn')).toBeTruthy();
    expect(wrapper.find('CheckOut')).toBeTruthy();
    expect(wrapper.find('Calendar')).toBeTruthy();
    expect(wrapper.find('Price')).toBeTruthy();
    expect(wrapper.find('Totals')).toBeTruthy();
    expect(wrapper.find('Guests')).toBeTruthy();
    expect(wrapper.find('BookButton')).toBeTruthy();
  });
});


