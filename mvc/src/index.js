import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';

ReactDOM.render(
        <Router>
            <div>
                <Route exact path='/employees' component={App} />
                <Route path='/edit/:id' component={Edit} />
                <Route path='/create' component={Create} />
                <Route path='/employees/:id' component={Show} />
            </div>
        </Router>,
    document.getElementById('root')
);
registerServiceWorker();
