import React from 'react';

const ErrorPage = () => {
    return (
        <div className='grid justify-center items-center text-center mt-80'>
            <h1 className='text-7xl text-gray-700'>404</h1>
            <h2 className='text-4xl mt-2 text-gray-700'>Oops... page not found. </h2>
            <p className='text-2xl mt-2 text-gray-700'>We don't know how you ended up here, but you should go away now. </p>
        </div>
    );
};

export default ErrorPage;