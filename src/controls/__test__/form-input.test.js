import React from "react"
import { shallow } from 'enzyme';

import Input from 'controls/form/input';

describe("Form - Input", () => {
  const props = {
    value: '',
    onChange: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper).toMatchSnapshot();
  });

  it("handles value on change", () => {
    const event = {
      preventDefault: ()=>{},
      target: { value: 'change' },
    };
    const wrapper = shallow(<Input { ...props } />);
    wrapper.find('input').first().simulate('change', event);
    expect(props.onChange).toHaveBeenCalled();
    expect(props.onChange).toHaveBeenCalledWith(event);
  });
});