import {MemoryRouter, Route, Router} from "react-router";
import * as React from "react";
import App from "../App";
import createMemoryHistory from "history/createMemoryHistory";
import {render} from "enzyme";

test("clicking filter links updates product query params", () => {
    let history, location;
    render(
        <MemoryRouter initialEntries={["/"]}>
            <App/>
            <Route
                path="*"
                render={({history, location}) => {
                    history = history;
                    location = location;
                    return null;
                }}
            />
        </MemoryRouter>);
});