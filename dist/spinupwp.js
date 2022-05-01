var $gXNCa$axios = require("axios");

var $953612543ca146d7$exports = {};
'use strict';

var $100592030dab1e52$exports = {};
'use strict';
$100592030dab1e52$exports = {
    baseURL: 'https://api.spinupwp.app/v1/'
};


const { baseURL: $953612543ca146d7$var$baseURL  } = $100592030dab1e52$exports;
const $953612543ca146d7$var$requester = $gXNCa$axios.create({
    baseURL: $953612543ca146d7$var$baseURL,
    responseType: 'json',
    validateStatus: (status)=>status === 200
});
$953612543ca146d7$exports = $953612543ca146d7$var$requester;


class $4fa36e821943b400$var$SpinupWP {
    constructor(access_token){
        this.access_token = access_token;
    }
    Events(id) {
        if (id) return this._sendRequest("events/" + id);
        else return this._sendRequest('events');
    }
    async _sendRequest(path) {
        const response = await $953612543ca146d7$exports.get(path, {
            headers: {
                Authorization: 'Bearer ' + this.access_token
            },
            validateStatus: function(status) {
                return status >= 200 && status < 300; // default
            }
        });
        return response.data;
    }
}
module.exports = $4fa36e821943b400$var$SpinupWP;


//# sourceMappingURL=spinupwp.js.map
