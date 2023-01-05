import React from 'react';

const NotFound = () => {
    return (
        <div className='bg-dark d-flex align-items-center' style={{ "height": "100vh" }}>
            <div className='container text-center'>
                <button type="button" class="btn btn-warning">Sorry! Page not Found...</button>
            </div>
        </div>
    );
};

export default NotFound;