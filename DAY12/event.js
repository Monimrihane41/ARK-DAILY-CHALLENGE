const EventEmitter = require('events');


const customEmitter = new EventEmitter();

customEmitter.on('response',(name,age) => {
    console.log(`Yeezy season approaching ${name} ${age}`)
})



customEmitter.emit('response',"Mo",21);
 