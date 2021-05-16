import http from "./httpService";
import config from "./config.json";

// Register 
export const registerUser = user => {
    return http.post(
        `${config.webapi}/api/v1/register`,
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
export const getToken = async () =>{
    const token = await localStorage.getItem("token");
    return `Bearer ${token}`
}

export const  getUserInformation = async () =>{
   return http.get(
        `${config.webapi}/api/v1/user/getUserInfo`,
        { headers:{ 'Authorization' : await getToken() } } // USER TOKEN => User Toekn from Local Storage for Auth
    );
}
// Get User Info  -- Use Token
/*export const getUserInfo = async ()=> {
    return http.get(
    `${config.webapi}/api/v1/user/getUserInfo`,
    { headers:{ 'Authorization' : await getToken() } } // USER TOKEN => User Toekn from Local Storage for Auth
    );
} */

// Update user info  --  Method = POST
export const updateUserInfo = async (data) => {
    return http.post(
    `${config.webapi}/api/v1/user/updateInfo`, 
    JSON.stringify(data),
    { headers:{ 'Authorization' : await getToken() } } // USER TOKEN => User Toekn from Local Storage for Auth
    
    );
}

// Get User Reserves  -- Use Token
export const userReserves = async ()=> {
    return http.get(
    `${config.webapi}/api/v1/user/reserves`, 
    { headers:{ 'Authorization' : await getToken()} } // USER TOKEN => User Toekn from Local Storage for Auth
    );
}

// Get User Transactions  -- Use Token
export const userTransactions = async ()=> {
    return http.get(
    `${config.webapi}/api/v1/user/transactions`, 
    { headers:{ 'Authorization' : await getToken() } } // USER TOKEN => User Toekn from Local Storage for Auth
    );
}

// Get User Villas  -- Use Token
export const userVillas = async ()=> {
    return http.get(
    `${config.webapi}/api/v1/user/villas`, 
    { headers:{ 'Authorization' : await getToken() } } // USER TOKEN => User Toekn from Local Storage for Auth
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
export const getUserVillaComments =async id=> {
    return http.get(
    `${config.webapi}/api/v1/user/getUserVillaComments/${id}`, 
    { headers:{ 'Authorization' :  await getToken() } } // USER TOKEN => User Toekn from Local Storage for Auth
    );
}

// Replay comment from user panel  --  Method = POST
export const replayComment = async (data,villaId,parentId) => {
    return http.post(

    `${config.webapi}/api/v1/user/replayComment/${villaId}/${parentId}`, 
    JSON.stringify(data),
    { headers:{ 'Authorization' :  await getToken() } } // USER TOKEN => User Toekn from Local Storage for Auth
    
    );
}

// Add comment for a villa  --  Method = POST -- id => villa id
 export const addComment = (data,id) => {
    return http.post(

    `${config.webapi}/api/v1/user/addComment/${id}`, 
    JSON.stringify(data),
    { headers:{ 'Authorization' : `Bearer USER Token` } } // USER TOKEN => User Toekn from Local Storage for Auth
    
    );
}

// Get User Villa Dates  -- Use Token  --  id => villa id
export const villaDates = async  id=> {
    return http.get(
    `${config.webapi}/api/v1/user/villaDates/${id}`, 
    { headers:{ 'Authorization' : await getToken() } } // USER TOKEN => User Toekn from Local Storage for Auth
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

// Get All Reservations Requested  -- Use Token
export const allReservationsRequested = () => {
    return http.get(
    `${config.webapi}/api/v1/user/allReservationsRequested`, 
    { headers:{ 'Authorization' : `Bearer USER Token` } }
    );
}

// Get One Reservations Requested Base id -- Use Token  --  id => villa id
export const reservationsRequested = id => {
    return http.get(
    `${config.webapi}/api/v1/user/reservationsRequested/${id}`, 
    { headers:{ 'Authorization' : `Bearer USER Token` } }
    );
}

// Change Reserve Status  --  Method = POST -- id => villa id
export const changeReserveStatus = (data,id) => {
    return http.post(

    `${config.webapi}/api/v1/user/changeReserveStatus/${id}`, 
    JSON.stringify(data),
    { headers:{ 'Authorization' : `Bearer USER Token` } }
    
    );
}

// Withdrawal Request  --  Method = POST
export const withdrawal = async data => {
    return http.post(

    `${config.webapi}/api/v1/user/withdrawal`, 
    JSON.stringify(data),
    { headers:{ 'Authorization' :  await getToken() } }
    
    );
}

// Get user favorite villas -- Use Token
export const favorites = () => {
    return http.get(
    `${config.webapi}/api/v1/user/favorites`, 
    { headers:{ 'Authorization' : `Bearer USER Token` } }
    );
}

// Add To Favorite  --  Method = POST
export const addToFavorite = data => {
    return http.post(

    `${config.webapi}/api/v1/user/addToFavorite`, 
    JSON.stringify(data),
    { headers:{ 'Authorization' : `Bearer USER Token` } }
    
    );
}

// Remove From Favorite  --  Method = POST
export const removeFromFavorite = data => {
    return http.post(

    `${config.webapi}/api/v1/user/removeFromFavorite`, 
    JSON.stringify(data),
    { headers:{ 'Authorization' : `Bearer USER Token` } }
    
    );
}

// Reserve Request  --  Method = POST
export const reserveRequest = data => {
    return http.post(

    `${config.webapi}/api/v1/reserveRequest`, 
    JSON.stringify(data),
    { headers:{ 'Authorization' : `Bearer USER Token` } }
    
    );
}