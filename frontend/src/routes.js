import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import api from './services/api';

import Home from './views/Home';
import ShowContact from './views/ShowContact';
import CreateContact from './views/CreateContact';
import UpdateContact from './views/UpdateContact';

// import DeleteContact from './components/DeleteContact';

function Routes() {
    const DeleteContact = async (props) => {
        const id = props.match.params.id;
        await api.delete(`/${id}`);
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/detalhe/:id" component={ShowContact} />
                <Route path="/cadastrar" component={CreateContact} />
                <Route path="/editar/:id" component={UpdateContact} />
                <Route path="/deletar/:id" component={DeleteContact}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
