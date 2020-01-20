import React from 'react';
import './App.css';
import {LayoutApp} from "./layout";
import { Switch } from 'react-router-dom';
import {GuestRoute} from "./layout/routes";
import routes from "./routes";
import {AppointmentsContainer} from "./plugins/appointments";

const App: React.FC = (props: any) => {

    const { location, history } = props;

    return (
        <LayoutApp location={location}>
            <Switch>
                <GuestRoute location={location} history={history} exact path="/" Component={AppointmentsContainer} />
                {routes.map((prop: any, key: any) =>
                    <prop.routetype
                        path={prop.path}
                        Component={(props) => <prop.routeComponent {...props} />}
                        key={key}
                        location={location}
                        history={history}
                    />
                )}
            </Switch>
        </LayoutApp>
    );
}

export default App;
