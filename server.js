const YAML = require('yaml')
const pako = require('pako')
const yaml = require('js-yaml');
const zlib = require('zlib');
const LZString = require('lz-string');
function compressString(inputString) {
    // Convert string to Buffer
    const inputBuffer = Buffer.from(inputString, 'utf8');
  
    // Compress the input Buffer
    const compressedBuffer = zlib.deflateSync(inputBuffer);
  
    // Convert compressed Buffer to Base64 string
    const compressedString = compressedBuffer.toString('base64');
  
    return compressedString;
  }
  

const $RefParser = require("@apidevtools/json-schema-ref-parser");
var QRCode = require('qrcode')
const fs   = require('fs');
const doc = yaml.load(fs.readFileSync('./transaction.yaml', 'utf8'));
// console.log(doc)

// const yamlContent = fs.readFileSync(yamlFilePath, 'utf8');
// const openApiDoc = yaml.load(yamlContent);
// console.log(openApiDoc)
const str = '/on_init'
// console.log(doc.paths['/on_init'].post.requestBody.content['application/json'].schema.properties.context.allOf[0].$ref)
var refValue = doc.paths['/on_init'].post.requestBody.content['application/json'].schema.properties.context.allOf[0].$ref
refValue = doc
// var data = doc.paths['/on_init'].post.requestBody.content['application/json'].schema.properties
var yam

// jsonData = compressString(data)
// console.log(jsonData)

$RefParser.dereference(refValue)
  .then((resolvedSchema) => {
    // console.log(resolvedSchema);
    yam = resolvedSchema
    console.log('done')
    data = yam

    // console.log(yam.paths['/on_init'].post.requestBody.content['application/json'].schema.properties.context.allOf[0])
    data = yam.paths['/on_init'].post.requestBody.content['application/json'].schema.properties.context.allOf[0]

    // console.log(data)
    console.log((yam.paths['/on_init'].post.requestBody.content['application/json'].schema.properties.message.properties.order.properties.items.items.properties))
    // console.log(data)
    data.descriptor = yam.paths['/on_init'].post.requestBody.content['application/json'].schema.properties.message.properties.order.properties.items.items.properties.descriptor
    data.price = yam.paths['/on_init'].post.requestBody.content['application/json'].schema.properties.message.properties.order.properties.items.items.properties.price
    data.quantity = yam.paths['/on_init'].post.requestBody.content['application/json'].schema.properties.message.properties.order.properties.items.items.properties.quantity
    // data.message.type = yam.paths['/on_init'].post.requestBody.content['application/json'].schema.properties.message.properties.order.properties.type

    jsonData = data
    jsonData = JSON.stringify(jsonData);
    // jsonData = pako.deflate(jsonData, { to: 'string' });
   
    // console.log(jsonData)
    jsonData = compressString(jsonData)
    console.log(jsonData.length)
    // // console.log(jsonData)
    // console.log(jsonData.length)
    })
  .catch((error) => {
    console.error(error);
  });
  console.log('hmm')



// console.log(doc.paths.string)
const express = require('express'),
    cookieParser = require('cookie-parser'),
    log = require('morgan'),
    path = require('path'),
    cors = require('cors'),
    multer = require('multer'),
    upload = multer(),
    app = express(),

    PORT = process.env.PORT || 3000,
    NODE_ENV = process.env.NODE_ENV || 'development';

app.set('port', PORT);
app.set('env', NODE_ENV);
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors());
app.use(log('tiny'));

// parse application/json
app.use(express.json());

// parse raw text
app.use(express.text());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// parse multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.use(cookieParser());
app.set('view engine', 'ejs')
app.get('/on_init/qr',async function(req,res) {
    var fullUrl = req.protocol + '://' + req.get('host')
    console.log(fullUrl)
    var qr= null
    // console.log(jsonData)
    // jsonData = JSON.stringify(jsonData)
    console.log(jsonData)
    console.log(jsonData.length)
    QRCode.toString(jsonData, {
        type: 'svg',
        errorCorrectionLevel: 'L',
        margin: 2,
        scale: 8
      }, function(err, data) {
        if (err) throw err;
        qr=data
        // console.log(data);
      });
    //   console.log(qr)
      res.render('qr',{qr})
})
require('./routes')(app);

// catch 404
app.use((req, res, next) => {
    // log.error(`Error 404 on ${req.url}.`);
    res.status(404).send({ status: 404, error: 'Not found' });
});

// catch errors
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const msg = err.error || err.message;
    // log.error(`Error ${status} (${msg}) on ${req.method} ${req.url} with payload ${req.body}.`);
    res.status(status).send({ status, error: msg });
});

module.exports = app;

app.listen(PORT, () => {
    console.log(
        `Express Server started on Port ${app.get(
            'port'
        )} | Environment : ${app.get('env')}`
    );
});