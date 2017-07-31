import {rootPath, refreshTime, expiredTime} from './config'
import {browserHistory} from 'react-router'

const xhr = ({url, body = {}, method = 'get', headers = {}}) => {

    let options = {};

    let url = url;

    let USVString = Object.entries(body).map((value,index) => `${value[0]}=${value[1]}`).join('&');

    headers.Authorization = localStorage.getItem('jwtToken');
    headers['Content-Type'] = 'application/x-www-form-urlencoded';

    // 满足条件则刷新token
    if (!url.startsWith("/login") && !url.startsWith("/register")) {
        if (!localStorage.getItem("lastAction") && !localStorage.getItem('jwtToken')) {
            browserHistory.push("/login")
        } else {

            let now = (new Date).getTime();
            // token超时
            if (now - localStorage.getItem('lastAction') > expiredTime) {
                localStorage.clear();
                browserHistory.push("/login");
                return
            }
        }
    }



    USVString && (method === 'get' || method === 'GET') && (url = `${url}?${USVString}`);

    USVString && (method === 'post' || method === 'POST') && (options.body = USVString);

    options.headers = headers;
    options.method = method;
    options.mode = 'cors';


    return fetch(rootPath + url, options)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error(JSON.stringify(res.body));
            }
        })
        .catch(e => {
            console.log('error', e, e.status)
        });
};

export default xhr
