import http from "./httpService";
import config from "./config.json";

// Register 
export const registerUser = user => {
    return http.post(
        `${config.localapi}/api/v1/register`,
        JSON.stringify(user)
    );
};

// Login 
export const sendPhoneNumber = user => {
    return http.post(
        `${config.webapi}/api/v1/login`,
        JSON.stringify(user)
    );
};

// Verify sms code
export const verifySmsCode = user => {
    return http.post(
        `${config.webapi}/api/v1/verifySmsCode`,
        JSON.stringify(user)
    );
};