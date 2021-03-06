const R = require('ramda');

const filterResponse = R.curry(async (api, route, ctx, next) => {
  await next();
  const filters = ctx.state.filters;
  const combinedFilter = R.allPass(filters);
  ctx.response.body = R.filter(combinedFilter, ctx.response.body);
});

module.exports = filterResponse;
