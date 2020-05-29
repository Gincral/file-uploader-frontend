import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import history from '../history';


class App extends React.Component {
    render() {
        return (
            <div className="app">
                <BrowserRouter history={history}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;