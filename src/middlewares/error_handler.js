const handleError = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.error;
    // ctx.app.emit('error', err, ctx);
    // next();
  }
};
module.exports = handleError;