// require the needed things
const prompt = require('prompt');
const qrcode = require('qrcode-terminal');
const flattery = require('./flattery.json');

const schema = {
    properties: {
        string: {
            message: 'Enter your string',
            required: true
        }
    }
};

// a random piece of flattery
var flatter = flattery[Math.floor(Math.random() * flattery.length)];

prompt.start();

//
// Get two properties from the user: email, password
//
prompt.get(schema, function(err, result) {
    // Log the qrcode
    qrcode.generate(result.string);
    // randomly flatter myself -- because I *am* writing this for myself
    console.log('Do you know why you\'re aweosme?');
    console.log(flatter);
});
