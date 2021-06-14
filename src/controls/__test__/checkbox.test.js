import React from "react"
import { shallow } from 'enzyme';

import Button from 'controls/button';
import Checkbox from 'controls/checkbox';

describe("Checkbox", () => {
  const props = {
    onClick: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper).toMatchSnapshot();
  });

  it("handles on click", () => {
    const wrapper = shallow(<Checkbox { ...props } />);
    wrapper.find(Button).first().simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
});