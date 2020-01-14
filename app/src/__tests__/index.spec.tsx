import ReactDOM from 'react-dom';
import * as React from "react";
import App from "../App";

jest.mock('react-dom', ()=> ({render: jest.fn()}))

it('renders without crashing', () => {
    const div = document.getElementById('root')
    ReactDOM.render(<App/>, div);
    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div);
});