import * as Cookies from "js-cookie";
import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export function postRequest(url, json) {
    let csrf_token = Cookies.get('csrftoken');

    return axios.post(url, json, {
        "X-CSRFToken": csrf_token,
        "withCredentials": true
    });
}
