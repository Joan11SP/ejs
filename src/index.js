const path = require('path'),
      body_parser = require('body-parser'),
      morgan = require('morgan'),
      cors = require('cors'),
      express = require('express'),
      app = express(),
      router = require('./Router/router');

app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:false}))

app.set('views',path.join(__dirname,'Views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'))

app.use(cors());

app.use('/',router)

var port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('server on port ',port)
})
