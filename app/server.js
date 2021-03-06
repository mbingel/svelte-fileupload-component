import compression from 'compression';
import sapper from 'sapper';
import serve from 'serve-static';
import { routes } from './manifest/server.js';
import App from './App.html';
const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');;
const bodyParser = require('body-parser');
var multer = require('multer');

express() // You can also use Express
	.use(fileUpload())
	.use(bodyParser.urlencoded())
	.use(
		compression({ threshold: 0 }),
		serve('assets'),
		sapper({
			routes,
			App
		})
	)
	.use(morgan('combined'))

	.listen(process.env.PORT);
