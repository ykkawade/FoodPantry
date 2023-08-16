const { authJwt } = require('../middleware');
const controller = require('../controllers/courier.controller');
module.exports = function (app) {
  app.post(
    '/courier/create',
    [authJwt.verifyToken, authJwt.isCourier],
    controller.createCourier
  );
  app.post(
    '/courier/update',
    [authJwt.verifyToken, authJwt.isCourier],
    controller.updateCourier
  );
  app.get(
    '/courier/get',
    [authJwt.verifyToken, authJwt.isCourier],
    controller.getCourier
  );
};
