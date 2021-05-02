import http from "./httpService";

import config from "./config.json";


// Get Reservation Factor   --   id = Reservation id
export const factor = id => {  
    return http.get(
        `${config.webapi}/api/v1/factor/${id}`,
        { headers: { 'Authorization': `Bearer USER Token` } } // USER TOKEN => User Toekn from Local Storage for Auth
    );
}

// Request Payment  --  Method = POST
export const requestPay = data => {
    return http.post(

    `${config.webapi}/api/v1/request/pay`, 
    JSON.stringify(data),
    { headers:{ 'Authorization' : `Bearer USER Token` } }
    
    );
}

// Get Payment Status  --  Method = POST
export const getPayStatus = data => {
    return http.post(

    `${config.webapi}/api/v1/getPayStatus`, 
    JSON.stringify(data),
    { headers:{ 'Authorization' : `Bearer USER Token` } }
    
    );
}