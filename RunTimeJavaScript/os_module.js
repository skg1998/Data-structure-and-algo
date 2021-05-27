const os = require('os');

//info about current user
console.log(`The user ${JSON.stringify(os.userInfo())}`);

//methods return the system uptime in seconds
console.log(`The System uptime ${os.uptime()} in second`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)