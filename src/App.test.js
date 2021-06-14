import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from 'App';

const mockStore = configureStore();
const store = mockStore({});

describe("App", () => {
  const wrapper = shallow(
    <Provider store={ store }>
      <App />
    </Provider>
  );
  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
