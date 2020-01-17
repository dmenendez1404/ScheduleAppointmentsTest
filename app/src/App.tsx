import React from 'react';
import logo from './logo.svg';
import './App.css';
import HttpBase from "./services/base/httpBase";

const App: React.FC = () => {
    const apiServices = new HttpBase('appointments');

    let res;
    apiServices.getAll().then((docs: any) => res = docs)

    console.log(res)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Hello from {process.env.REACT_APP_ENV}
                    {res && res}
                </a>
            </header>
        </div>
    );
}

export default App;
