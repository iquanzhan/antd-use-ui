import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NoMatch from "./pages/nomatch";
import Login from "./pages/login";
import Admin from "./admin";
import Buttons from "./pages/ui/buttons";
import Modals from "./pages/ui/modals";
import Loading from "./pages/ui/Loading";
import Notice from "./pages/ui/notice";
import Message from "./pages/ui/message";
import Tabs from "./pages/ui/tabs";
import Gallery from "./pages/ui/gallery"

class Router extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                <Route path="/admin/ui/modals" component={Modals}></Route>
                                <Route path="/admin/ui/loadings" component={Loading}></Route>
                                <Route path="/admin/ui/notification" component={Notice}></Route>
                                <Route path="/admin/ui/messages" component={Message}></Route>
                                <Route path="/admin/ui/tabs" component={Tabs}></Route>
                                <Route path="/admin/ui/gallery" component={Gallery}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    } />
                    <Route path="/order/detail" component={Login} />
                </App>
            </HashRouter>
        );
    }
}

export default Router;