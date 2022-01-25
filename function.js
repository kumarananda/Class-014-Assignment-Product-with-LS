

// Product ToDo with LocalStorage Start 
/**
 * 
 * @param {*} key 
 * @param {*} arry 
 */
function sendDataToLS(key, arry) {
    let data = JSON.stringify(arry);
    localStorage.setItem(key, data)
};
/**
 * 
 * @param {*} key 
 * @returns 
 */
function getItemFromLS(key) {
    let data = localStorage.getItem(key)
    return data ? JSON.parse(data) : false;
    
};



