const db = require('../models/index');
const config = require('../config/auth.config');
const Op = db.Sequelize.Op;
const { Courier } = db;
const Sequelize = require('sequelize');

// Create
exports.createCourier = (req, res) => {
  // Check if req.body was a object - receiver
  if (!req.body.courier) {
    res.status(400).send({
      message: 'Courier object required',
    });
    return;
  }

  // If so make new object and pass it on for creation
  // Here we can do some data validation if we want to
  let courier = {
    user_id: req.userId,
    first_name: req.body.courier.first_name,
    last_name: req.body.courier.last_name,
    availability: req.body.courier.availability,
    number_of_deliveries: req.body.courier.number_of_deliveries,
  };

  // Sequalize statement for create object
  Courier.create(courier)
    .then((courierObj) => {
      let courier = {
        first_name: courierObj.first_name,
        last_name: courierObj.last_name,
        availability: courierObj.availability,
        number_of_deliveries: courierObj.number_of_deliveries,
      };
      res.status(200).send({
        message: 'Courier Content.',
        courier_user: courier,
      });
    })
    .catch((error) => {
      if (error.name === 'SequelizeUniqueConstraintError') {
        console.error(error);
        res.status(200).send({
          message:
            'ERROR - Duplicate Entry! Foreign key constrain. Only one Courier record per user. Try updating the existing. change receiver/create to /receiver/update in URL',
          error_message: error.errors[0].message,
          error_type: error.errors[0].type,
          error_path: error.errors[0].path,
          // error: error,
        });
      } else {
        res.status(200).send({
          message: 'ERROR - Some other error',
          error: error,
        });
      }
    });
};

// Get
exports.getCourier = (req, res) => {
  console.log(req.userId);
  Courier.findOne({
    where: {
      user_id: req.userId,
    },
    attributes: {
      exclude: ['RoleRoleId'],
    },
  })
    .then((courierObj) => {
      console.log(courierObj);
      if (courierObj) {

        const courier = {
          first_name: courierObj.first_name,
          last_name: courierObj.last_name,
          availability: courierObj.availability,
          number_of_deliveries: courierObj.number_of_deliveries,
        };
        res.send(courier);
      } else {
        res.send({
          message: `Cannot get Courier!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Courier.',
      });
    });
};

// // Update
exports.updateCourier = (req, res) => {
  Courier.update(req.body.courier, {
    where: { user_id: req.userId },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Courier was updated successfully.',
        });
      } else if (num !== 1) {
        res.status( 404).send({
          message: `Cannot update Courier. Courier not found!`,
        });
      } else {
        res.send({
          message: `Cannot update Courier. Maybe Address was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: 'Error updating Courier.',
      });
    });
};

// Delete
