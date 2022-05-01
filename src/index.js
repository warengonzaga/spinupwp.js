const requester = require('./requester');

class SpinupWP {
    constructor(access_token) {
        this.access_token = access_token;
    }
 
    Events(id) {
        if (id) {
            return this._sendRequest('events' + '/' + id);
        } else {
            return this._sendRequest('events');
        }
    }
 
    async _sendRequest(path) {
        const response = await requester.get(path, {
            headers: {
                Authorization: 'Bearer ' + this.access_token,
            },
            validateStatus: function (status) {
                return status >= 200 && status < 300; // default
            }
        });
        return response.data;
    }
 }
 
module.exports = SpinupWP;
