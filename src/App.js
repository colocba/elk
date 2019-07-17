import React from 'react';
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage'


const App = () => (
    <div>
        <Route path="/" exact component={HomePage} />
    </div>
)

export default App;
