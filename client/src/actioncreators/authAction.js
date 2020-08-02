import { authActionConstant } from 'client/constants';
import { authRequests } from '../requests'
import Auth from '../../../../reactJS-SPA/client/src/js/requests/auth';

export const initRequest = () => {
    return {
        type: authActionConstant.InitRequest
    }
}

export const loginSuccess = ({ history, payload }) => {
    return {
        type: authActionConstant.LoginSuccess,
        payload
    }
}

export const login = ({ userName, passWord, history, newRoute }) => {
    return (dispatch) => {
        dispatch(initRequest());
        return Auth.login(userName, passWord)
            .then(res => {
                console.log(res);
                dispatch(loginSuccess());
            }).then(() => {

            }).catch(rej => {

            });
    }
}