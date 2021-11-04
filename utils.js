const axios = require('axios');
let response = {
    status: 000,
    data : {},
    err: {}
};
let base_url = "https://ifsc.razorpay.com/";



// Make HTTP request to Razorpay to get IFSC details
exports.callRazorpay = function(code) {
    return axios.get(base_url + code)
    .then(function (response) {
        switch (response) {
            case "Not Found":
                response.status = 404;
                break;

            default:
                response.status = 200;
                break;
        }
       response.data = response.data;
       return response;
    })
    .catch(function (error) {
        response.status = error.response.status;
        response.err = error.response.statusText;
        return response;
    })
}

exports.trasnformDataId= function(id){
    return id.toUpperCase();
}