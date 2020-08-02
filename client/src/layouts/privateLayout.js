import React, { Suspense } from 'react';

export const PrivateLayout = (props) => {
    return (
        <Suspense
            fallback={
                <div>Loading ...</div>
            }
        >
            <div>Private Layout ...</div>
            <div className='private-route'>
                {props.children}
            </div>
        </Suspense>
    );
}
