import React, { Suspense } from 'react';

export const PublicLayout = (props) => {
    return (
        <Suspense
            fallback={
                <div>Loading ...</div>
            }
        >
            <div>Public Layout ...</div>
            <div className='public-route'>
                {props.children}
            </div>
        </Suspense>
    );
}