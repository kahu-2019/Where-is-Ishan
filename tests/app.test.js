import React from 'react'
import { shallow } from 'enzyme'
import { generateRandomArr } from '../client/api/apiRoute'

import { App } from '../client/components/App';


test('<App />', () => {
  const expected = 'React development has begun!'
  const wrapper = (<App />)
  expect(wrapper.text()).toBe(expected)
})

test('fake test', () => {
  expect(true).toBeTruthy();
});

test('getRandomArr', () => {
  const expectedLength = 4
  const actualArray = generateRandomArr(0)
  expect(actualArray.length).toBe(expectedLength)
})
