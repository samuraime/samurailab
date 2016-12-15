const Koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router');
const path = require('path');
const serveIndex = require('koa-serve-index');

const app = new Koa();

const publicDir = path.join(__dirname, 'public');
app.use(serveIndex(publicDir));
app.use(serve(publicDir));

app.listen(3000);
