import React from "react";
import { BrowserRouter as ReactRouter, Route, Switch, Link } from "react-router-dom";
import StudentTable from "./StudentTable/StudentTable";

import * as Routes from "../routes/routes";
import UpdateStudent from "./StudentEditForm/UpdateStudent";
import CreateStudent from "./StudentEditForm/CreateStudent";
import { connect } from 'react-redux';

function Router() {
    return (<ReactRouter>
        <Switch>
            {/* nb. Order is important because switch statement */}
            <Route path={Routes.CREATE_STUDENT} exact component={CreateStudent} />
            <Route path={`${Routes.UPDATE_STUDENT}/:id`} exact component={UpdateStudent} />
            <Route path={Routes.STUDENT_TABLE} exact component={StudentTable} />
            <Route path={Routes.HOME} exact component={StudentTable} />
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