import TestRenderer from 'react-test-renderer';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import App from '../public/src/components/App.jsx';

describe('test front end', () => {
  test('nothing is real', () => {
    expect(true).toBe(true);
  });

  test('CheckIn component exists in App', () => {
    let wrapper = mount(<App />);
    expect(wrapper.find('CheckIn')).toBeTruthy();
  });
});

