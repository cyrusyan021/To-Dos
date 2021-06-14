import React from "react"
import { shallow } from 'enzyme';

import ErrorAlert from 'controls/error-alert';

import { API_ERROR_MESSAGE } from 'constants/api';

describe("Error Alert", () => {
  const props = {
    error: 'Testing Error Message',
  };

  it("renders correctly with default error message", () => {
    const wrapper = shallow(<ErrorAlert />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').first().text()).toEqual(API_ERROR_MESSAGE);
  });

  it("renders correctly with specified error message", () => {
    const wrapper = shallow(<ErrorAlert { ...props } />);
    expect(wrapper.find('div').first().text()).toEqual(props.error);
  });
});