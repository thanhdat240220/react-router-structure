import React from 'react';
import { Route } from 'react-router-dom';

export const PublicRoute = ({
    component: Component,
    layout: Layout,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => {
                return (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                );
            }}
        />
    );
}
