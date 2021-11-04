const axios = require('axios');

var response = {
    status: 000,
    data : {},
    err: {}
};
var base_url = "https://ifsc.razorpay.com/";


 function callRazorpay(code) {
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
        return conf.response;
    })
}


module.exports = callRazorpay