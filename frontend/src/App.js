import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import JobPlacement from './pages/JobPlacement';
import Employ from './pages/Employ';
import ApplicationProcessing from './pages/ApplicationProcessing';
import AdminControl from './pages/AdminControl';
import DepartmentSpecific from './pages/Departmeconsole.log('
Rendering App component ');ntSpecific';
import MeetingHub from './pages/MeetingHub';

function App() {
    return ( <
        Router >
        <
        Switch >
        <
        Route path = "/"
        exact component = { DashBoard }
        /> <
        Route path = "/job-placement"
        component = { JobPlacement }
        /> <
        Route path = "/employ"
        component = { Employ }
        /> <
        Route path = "/application-processing"
        component = { ApplicationProcessing }
        /> <
        Route path = "/admin-control"
        component = { AdminControl }
        /> <
        Route path = "/department-specific"
        component = { DepartmentSpecific }
        /> <
        Route path = "/meeting-hub"
        component = { MeetingHub }
        /> < /
        Switch > <
        /Router>
    );
}

export default App;