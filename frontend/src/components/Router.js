import React from "react";
import { BrowserRouter as ReactRouter, Route, Switch, Link } from "react-router-dom";

import * as Routes from "../routes/routes";

import { connect } from 'react-redux';
import Main from "./Main";

function Router() {
    return (<ReactRouter>
        <Switch>
            {/* nb. Order is important because switch statement */}
            <Route path={Routes.HOME} exact component={Main} />
        </Switch>
    </ReactRouter>)
}

const mapStateToProps = (
    state,
    ownProps
) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {

    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Router)