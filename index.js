const fs = require('fs');
const koa = require('koa');
const koaBody = require('koa-body');

const app = new koa();

const [,, fileToRead] = process.argv;

app.use((ctx, next) => {
  if (ctx.path !== '/json') return next();

  ctx.body = {
    foo: 'bar',
  };
});

app.use((ctx, next) => {
  if (ctx.path !== '/stream') return next();

  ctx.body = fs.createReadStream(fileToRead || 'some_file.txt');
});

app.use(ctx => {
  ctx.body = 'Hello Koa';
})


app.listen(3000);