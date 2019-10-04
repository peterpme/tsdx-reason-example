import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Greeting } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Greeting name="Peter" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
