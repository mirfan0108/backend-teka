const express       = require('express');
const app           = express();
var cors            = require('cors')
const bodyParser    = require('body-parser');
const expressValidator = require('express-validator')
const index         = require('./routes/index');
const auth          = require('./routes/auth')
const admin         = require('./routes/admin');
const helmet        = require('helmet')
let workers         = [];
var cluster         = require('cluster');
const nocache       = require('nocache');
var whitelist = ['*']
var corsOptions = {
  origin: '*',
}
const imageToBase64 = require('image-to-base64');

var path = require('path');
var dir = path.join(__dirname, '..' ,'static','images');
var multer = require('multer');

const setupWorkerProcesses = () => {
    let numCores = require('os').cpus().length;
    console.log('Master cluster setting up ' + numCores + ' workers');
    for(let i = 0; i < numCores; i++) {
        workers.push(cluster.fork());
        workers[i].on('message', function(message) {
            console.log(message);
        });
    }
    cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is listening');
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
        workers.push(cluster.fork());
        workers[workers.length-1].on('message', function(message) {
            console.log(message);
        });
    });
};

const setUpExpress = () => {
    app.set('etag', false)
    app.use(nocache());
    app.use(helmet())
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))    
    app.disable('x-powered-by');
    

    app.use('/api/v1', cors(corsOptions), index);
    app.use('/auth',   cors(corsOptions) , auth )
    app.use('/gateway/v1/adm', cors(corsOptions), admin);
    app.get('/assets/:section/:name', cors(corsOptions), (req, res) => {
            res.sendFile(`${dir}/${req.params.section}/${req.params.name}`)
    });

    app.get('/blob/:section/:name',  cors(corsOptions), (req, res) => {
        let productImage
        let headerImage
        let footerImage
        imageToBase64(`${dir}/${req.params.section}/${req.params.name}`) // you can also to use url
            .then((response) => {
                productImage = response
            })
            .finally(() => {
                imageToBase64(`${dir}/tds/header.jpg`) // you can also to use url
                    .then((response) => {
                        headerImage = response
                    })
                    .finally(() => {
                        imageToBase64(`${dir}/tds/footer.jpg`) // you can also to use url
                            .then((response) => {
                                footerImage = response
                            })
                            .finally(() => {
                                res.json({productImage: productImage, headerImage: headerImage, footerImage: footerImage})
                            }) 
                    })  
            }) 
    })

    const port = process.env.PORT || 8000;
    app.listen(port, function() {
      console.log(`Server Starts on ${port}`);
    });
};
/**
 * Setup server either with clustering or without it
 * @param isClusterRequired
 * @constructor
 */

const setupServer = (isClusterRequired) => {
    if(isClusterRequired && cluster.isMaster) {
        setupWorkerProcesses();
    } else {
        setUpExpress();
    }
};

setupServer(true);

module.exports = app;