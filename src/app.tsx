import * as React from 'react';
import createHistory from 'history/createBrowserHistory';

import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import {Route, Switch, BrowserRouter, Link} from 'react-router-dom';
import './app.css';
import Home from './home';

import Navigation from './nav/navigation';
import FizzBuzz from "./problems/fizzbuzz";

class App extends React.Component<{}, {}> {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <BrowserRouter>


                    <div className="App">
                        <Navigation />
                        <Switch>
                            <Route exact={true} path="/" component={Home}/>
                            <Route exact={true} path="/fizzbuzz" component={FizzBuzz}/>
                        </Switch>
                    </div>

                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;
