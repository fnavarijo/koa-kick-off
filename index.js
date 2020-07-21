const koa = require('koa');
const app = new koa();

app.use((ctx, next) => {
  if (ctx.path !== '/') return next();

  ctx.body = 'Welcome home';
})

app.use((ctx, next) => {
  if (ctx.path !== '/404') return next();

  ctx.body = 'Page not found';
});

app.use((ctx, next) => {
  if (ctx.path !== '/500') return next();

  ctx.body = 'Internal server error';
});

app.listen(3000);