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

// Get User Info  -- Use Token
export const getUserInfo =()=> {
    return http.get(
    `${config.webapi}/api/v1/user/getUserInfo`, 
    { headers:{ 'Authorization' : `Bearer USER Token` } } // USER TOKEN => User Toekn from Local Storage for Auth
    );
}

// Update user info  --  Method = POST
export const updateUserInfo = data => {
    return http.post(

    `${config.webapi}/api/v1/user/updateInfo`, 
    JSON.stringify(data),
    { headers:{ 'Authorization' : `Bearer USER Token` } } // USER TOKEN => User Toekn from Local Storage for Auth
    
    );
}

// Get User Reserves  -- Use Token
export const userReserves =()=> {
    return http.get(
    `${config.webapi}/api/v1/user/reserves`, 
    { headers:{ 'Authorization' : `Bearer USER Token` } } // USER TOKEN => User Toekn from Local Storage for Auth
    );
}

// Get User Transactions  -- Use Token
export const userTransactions =()=> {
    return http.get(
    `${config.webapi}/api/v1/user/transactions`, 
    { headers:{ 'Authorization' : `Bearer USER Token` } } // USER TOKEN => User Toekn from Local Storage for Auth
    );
}

// Get User Villas  -- Use Token
export const userVillas =()=> {
    return http.get(
    `${config.webapi}/api/v1/user/villas`, 
    { headers:{ 'Authorization' : `Bearer USER Token` } } // USER TOKEN => User Toekn from Local Storage for Auth
    );
}

// Get Villa data for edit  -- Use Token  --  id => villa id
export const editVilla =id=> {
    return http.get(
    `${config.webapi}/api/v1/user/editVilla/${id}`, 
    { headers:{ 'Authorization' : `Bearer USER Token` } } // USER TOKEN => User Toekn from Local Storage for Auth
    );
}


// Get User Villa Comments  -- Use Token  --  id => villa id
export const getUserVillaComments =id=> {
    return http.get(
    `${config.webapi}/api/v1/user/getUserVillaComments/${id}`, 
    { headers:{ 'Authorization' : `Bearer USER Token` } } // USER TOKEN => User Toekn from Local Storage for Auth
    );
}

// Replay comment from user panel  --  Method = POST
export const replayComment = (data,villaId,parentId) => {
    return http.post(

    `${config.webapi}/api/v1/user/replayComment/${villaId}/${parentId}`, 
    JSON.stringify(data),
    { headers:{ 'Authorization' : `Bearer USER Token` } } // USER TOKEN => User Toekn from Local Storage for Auth
    
    );
}

// Add comment for a villa  --  Method = POST -- id => villa id
export const addComment = id => {
    return http.post(

    `${config.webapi}/api/v1/user/addComment/${id}`, 
    JSON.stringify(data),
    { headers:{ 'Authorization' : `Bearer USER Token` } } // USER TOKEN => User Toekn from Local Storage for Auth
    
    );
}

// Get User Villa Dates  -- Use Token  --  id => villa id
export const villaDates =id=> {
    return http.get(
    `${config.webapi}/api/v1/user/villaDates/${id}`, 
    { headers:{ 'Authorization' : `Bearer USER Token` } } // USER TOKEN => User Toekn from Local Storage for Auth
    );
}

// Change Dates Cost (Customize villa costs)  --  Method = POST -- id => villa id
export const changeDatesCost = (data,id) => {
    return http.post(

    `${config.webapi}/api/v1/user/changeDatesCost/${id}`, 
    JSON.stringify(data),
    { headers:{ 'Authorization' : `Bearer USER Token` } }
    
    );
}

// Change Dates Status (Customize villa status)  --  Method = POST -- id => villa id
export const changeDatesStatus = (data,id) => {
    return http.post(

    `${config.webapi}/api/v1/user/changeDatesStatus/${id}`, 
    JSON.stringify(data),
    { headers:{ 'Authorization' : `Bearer USER Token` } }
    
    );
}
