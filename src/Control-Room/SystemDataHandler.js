import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Must import Routes
import ControlDash from './ControlDash';
import ControlDashNav from './ControlDashNav';
import ControlChatHandler from './ControlChatHandler';

function SystemDataHandler() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ControlDash />} />  {/* Provide path */}
                <Route path="/controlchats" element={<ControlChatHandler />} />  {/* Provide path */}
                <Route path="/" element={<ControlDash />} />  {/* Provide path */}
            </Routes>
            <ControlDashNav />

        </>
    );
}

export default SystemDataHandler;
