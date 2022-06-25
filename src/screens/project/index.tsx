import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Route, Routes,Navigate, Router} from 'react-router'
import { EpicScreen } from 'screens/epic'
import { KanbanScreen } from 'screens/kanban'

export const ProjectScreen = () => {
    return (
        <div>
            <h1>ProjectScreen</h1>
            <Link to={'kanban'}>看板</Link>
            <Link to={'epic'}>任务组</Link>
            {/* <Router> */}

            <Routes>
                <Route path={'/kanban'} element={<KanbanScreen/>}/>
                <Route path={'/epic'} element={<EpicScreen/>}/>
                {/* <Navigate to={window.location.pathname+'/kanban'}/> */}
                <Route element={<Navigate to={window.location.pathname+'/kanban'}/>} />
            </Routes>
            {/* </Router> */}
        </div>
    )
}
