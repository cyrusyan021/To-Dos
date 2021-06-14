import React from "react"
import { shallow } from 'enzyme';

import Input from 'controls/input';

describe("Input", () => {
  const props = {
    onBlur: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper).toMatchSnapshot();
  });

  it("handles value on change and passes value to Props only when on blur", () => {
    const event = {
      preventDefault: ()=>{},
      target: { value: 'change' },
    };
    const wrapper = shallow(<Input { ...props } />);
    wrapper.find('input').first().simulate('change', event);
    wrapper.find('input').first().simulate('blur', event);
    expect(props.onBlur).toHaveBeenCalled();
    expect(props.onBlur).toHaveBeenCalledWith(event.target.value.trim());
  });
});