import { API_ROOT } from "../constant";

/* 
Tempat untuk fetch restUrl dari service/index.js
dan check response
*/

export const apiGet = (url) => {
    return fetch(API_ROOT + url)
        .then(response => {
            if (!response.ok) {
                console.log("NETWORK ERROR");
            }
            return response;
        })
        .then(data => data.json());
}