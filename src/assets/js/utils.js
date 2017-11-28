import * as Cookies from "js-cookie";
import axios from 'axios';

export function getRequest(url) {
    let csrf_token = Cookies.get('csrftoken');

    return fetch(url, {
        method: "GET",
        credentials: "same-origin",
        headers: {
            "X-CSRFToken": csrf_token,
        }
    }).then(function (response) {
        return response.json();
    }).catch(function (ex) {
        console.log(`Request to ${url} failed`, ex);
    });
}

export function postRequest(url, data) {
    let csrf_token = Cookies.get('csrftoken');

    return fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "X-CSRFToken": csrf_token,
        },
        body: data
    }).then(function (response) {
        return response.json();
    }).catch(function (ex) {
        console.log(`Request to ${url} failed`, ex);
    });
}
