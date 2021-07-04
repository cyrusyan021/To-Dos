import React from "react"
import { shallow } from 'enzyme';

import Pill from 'controls/pill';

describe("Pill", () => {
  const props = {
    option: { id: 'testing-id' },
    pillsOnClick: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const wrapper = shallow(<Pill />);
    expect(wrapper).toMatchSnapshot();
  });

  it("handles on click", () => {
    const wrapper = shallow(<Pill { ...props } />);
    wrapper.find('div').first().simulate('click');
    expect(props.pillsOnClick).toHaveBeenCalled();
    expect(props.pillsOnClick).toHaveBeenCalledWith(props.option.id);
  });
});