import React from "react"
import { shallow } from 'enzyme';

import Button from 'controls/button';

describe("Button", () => {
  const props = {
    onClick: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

  it("handles on click", () => {
    const wrapper = shallow(<Button { ...props } />);
    wrapper.find('button').first().simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
});