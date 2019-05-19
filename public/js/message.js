const accountSid = 'AC12f809c0f491bb22d9de11e0ae1f8f36';
const authToken = '6a0a88c5b79189e2e9b14d2ccf9f64ea';

const client = require('twilio')(accountSid, authToken);

client.messages.create ({
to: '16194848576',
from: '6193050958',
body: 'I love pink <3'

})

.then((message) => console.log(message.sid));