import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ConnectedRouter} from "connected-react-router";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from 'react-router-dom';
import {MuiThemeProvider} from "@material-ui/core";
import globalTheme from "./theme";
import {Store} from './store';
import * as History from "history";


const history = History.createBrowserHistory();
const store = Store;

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider theme={globalTheme}>
                <BrowserRouter basename={'/'}>
                    <Route component={App}/>
                </BrowserRouter>
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

