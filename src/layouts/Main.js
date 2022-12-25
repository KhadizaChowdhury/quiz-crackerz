import React from 'react';
import './Main.css'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='container'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;