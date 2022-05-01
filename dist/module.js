import {create as $5OpyM$create} from "axios";

var $cf838c15c8b009ba$exports = {};
var $0a9f0acf196f582e$exports = {};
'use strict';

var $0a4c69ff81eafed7$exports = {};
'use strict';
$0a4c69ff81eafed7$exports = {
    baseURL: 'https://api.spinupwp.app/v1/'
};


const { baseURL: $0a9f0acf196f582e$var$baseURL  } = $0a4c69ff81eafed7$exports;
const $0a9f0acf196f582e$var$requester = $5OpyM$create({
    baseURL: $0a9f0acf196f582e$var$baseURL,
    responseType: 'json',
    validateStatus: (status)=>status === 200
});
$0a9f0acf196f582e$exports = $0a9f0acf196f582e$var$requester;


class $cf838c15c8b009ba$var$SpinupWP {
    constructor(access_token){
        this.access_token = access_token;
    }
    Events(id) {
        if (id) return this._sendRequest("events/" + id);
        else return this._sendRequest('events');
    }
    async _sendRequest(path) {
        const response = await $0a9f0acf196f582e$exports.get(path, {
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
$cf838c15c8b009ba$exports = $cf838c15c8b009ba$var$SpinupWP;


export {$cf838c15c8b009ba$exports as default};
//# sourceMappingURL=module.js.map
