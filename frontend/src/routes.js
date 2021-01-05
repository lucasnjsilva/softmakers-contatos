import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './views/Home';
import ShowContact from './views/ShowContact';
import CreateContact from './views/CreateContact';
import UpdateContact from './views/UpdateContact';
import DeleteContact from './views/DeleteContact';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cadastrar" component={CreateContact} />
                <Route path="/editar/:id" component={UpdateContact} />
                <Route path="/detalhe/:id" component={ShowContact} />
                <Route path="/deletar/:id" component={DeleteContact}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
