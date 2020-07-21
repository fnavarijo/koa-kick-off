const koa = require('koa');
const koaBody = require('koa-body');

const app = new koa();

app.use(koaBody());
app.use(ctx => {
  const { name } = ctx.request.body;
  ctx.body = name.toUpperCase();
})

app.listen(3000);