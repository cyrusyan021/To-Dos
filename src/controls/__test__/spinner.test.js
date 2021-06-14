import React from "react"
import { shallow } from 'enzyme';

import Spinner from 'controls/spinner';

describe("Spinner", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper).toMatchSnapshot();
  });
});