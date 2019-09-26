'use strict';
const DataService = require('../service/data');

module.exports = {
  data: async (ctx, next) => {
    const unit = ctx.params.unit;
    ctx.body = await DataService.getData(unit);
  }
};
