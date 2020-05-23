import React from 'react'
import Layout from './index'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
Enzyme.configure({ Adapter: new Adapter() })


beforeEach()
it(' Layout commpent render correctly', () => {
  const wrapper = shallow(<Layout />)
  expect(toJson(wrapper)).toMatchSnapshot();
});
