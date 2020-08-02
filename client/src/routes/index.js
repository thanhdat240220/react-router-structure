import { Switch } from 'react-router-dom';

import routers from './routes';
import {
    PrivateRoute,
    PublicRoute
} from './layouts';

export default function Routes({ history }) {
    const renderRoutes = (routers) => {
        let result = routers.map((router, index) => {
            if (router.privateRoute) {
                return (
                    <PrivateRoute
                        key={index}
                        component={router.handler}
                        layout={router.layout}
                        exact={router.exact}
                        path={router.path}
                        permission={router.permission}
                    />
                );
            } else {
                return (
                    <PublicRoute
                        key={index}
                        component={router.handler}
                        layout={router.layout}
                        exact={router.exact}
                        path={router.path}
                        permission={router.permission}
                    />
                );
            }
        });
        return result;
    }

    return (
        <Switch>
            {renderRoutes(routers)}
        </Switch>
    );
}





