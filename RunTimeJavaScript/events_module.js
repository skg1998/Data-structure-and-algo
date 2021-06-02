const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data recived User name: ${name} id: ${id}`)
})

customEmitter.emit('response', 'john', 345);