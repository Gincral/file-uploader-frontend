import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Task from './tasks';
import history from '../history';


class App extends React.Component {
    render() {
        return (
            <div className="app">
                <BrowserRouter history={history}>
                    <Switch>
                        <Route path="/" exact component={Task} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;