export default () => {
  return async (ctx, next) => {
    const start = Date.now();

    strapi.log.info("hello from typescript middleware");

    await next();

    const delta = Math.ceil(Date.now() - start);
    ctx.set('X-Response-Time', delta + 'ms');
  };
};
 