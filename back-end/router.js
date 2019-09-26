const router = require('koa-router')();
const DataController = require('./controller/data');
const config = require('./config')

module.exports = (app) => {
  router.get(config.BASE_URL + '/data/:unit', DataController.data);

  app.use(router.routes()).use(router.allowedMethods());
}