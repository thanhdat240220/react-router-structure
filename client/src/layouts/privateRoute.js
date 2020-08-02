import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const NotFound = React.lazy(() => import('../components/NotFound'));
export const PrivateRoute = ({
    component: Component,
    layout: Layout,
    ...rest
}) => {
    console.log(Component);
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!localStorage.getItem('token')) {
                    console.log(1);
                    return (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: {
                                    from: props.location.pathname
                                }
                            }} />
                    );
                }
                else {
                    return (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    );
                    // if (rest.role.indexOf(user.role) > -1) {
                    //     <Layout>
                    //         <Component {...props} />
                    //     </Layout>
                    // } else {
                    //     <Layout>
                    //         <NotFound />
                    //     </Layout>
                    // }
                }
            }}
        />
    )
}
