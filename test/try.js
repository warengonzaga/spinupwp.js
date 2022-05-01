const SpinupWP = require('../dist/spinupwp'); // add SpinupWP package
const access = require('../token.json'); // load your token
const spinup = new SpinupWP(access.token); // add your token here

spinup.Events().then(data => console.log(data));
