import { apiGet } from "./baseService";

/* 
Tempat untuk menampung semua fungsi untuk fetchdata sesuai url

export const fetchData = (params) => {
    
    const restUrl = '/users/' + params; -> menyesuaikan rest url dari api
    return apiGet(restUrl); -> mengembalikan ke fungsi base service untuk fetch data
}

*/

export const fetchData = (params) => {
    const restUrl = '/users/' + params;

    return apiGet(restUrl);
}