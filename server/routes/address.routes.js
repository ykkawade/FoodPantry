const { authJwt } = require('../middleware');
const controller = require('../controllers/address.controller');
module.exports = function (app) {
  app.post(
    '/address/create',
    [authJwt.verifyToken,],
    controller.createAddress
  );

  app.get(
    '/address/get',
    [authJwt.verifyToken,],
    controller.getAddress
  );

  app.post(
    '/address/update',
    [authJwt.verifyToken,],
    controller.updateAddress
  );
};
