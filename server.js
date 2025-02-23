const http = require('http');
const cluster = require('cluster');
const os = require('os');

const numCpus = os.cpus().length;

if(cluster.isPrimary) {
    console.log(`Master process is running with PID: ${process.pid}`);

    for(let i = 0; i < numCpus; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`)
    })
} else {
    const server = http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        console.log("from " + process.pid)
        res.end('Hello from NodeJs');
    });
    
    server.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
}
