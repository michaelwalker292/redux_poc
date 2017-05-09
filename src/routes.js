import React from 'react'
import {Route, IndexRoute} from 'react-router'
import app from './app/App';
import app from './components/main_page/MainPage';

export default (
    <Route path="/" component={App}>
    <IndexRoute components={MainPage} />
    </Route>
)