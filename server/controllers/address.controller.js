const db = require('../models/index');
const config = require('../config/auth.config');
const Op = db.Sequelize.Op;
const { Address } = db;
const Sequelize = require('sequelize');

// Create
exports.createAddress = (req, res) => {
  // Check if req.body was a object - receiver
  if (!req.body.address) {
    res.status(400).send({
      message: 'Address object required',
    });
    return;
  }

  // If so make new object and pass it on for creation
  // Here we can do some data validation if we want to
  let address = {
    user_id: req.userId,
    address: req.body.address.address,
    address_line_2: req.body.address.address_line_2,
    city: req.body.address.city,
    state: req.body.address.state,
    zip: req.body.address.zip,
    country: req.body.address.country,
    location_name: req.body.address.location_name,
  };

  // Sequalize statement for create object
  Address.create(address)
    .then((address) => {
      let addressObj = {
        address: address.address,
        address_line_2: address.address_line_2,
        city: address.city,
        state: address.state,
        zip: address.zip,
        country: address.country,
        location_name: address.location_name,
      };
      res.status(200).send({
        message: 'Address Content.',
        address: addressObj,
      });
    })
    .catch((error) => {
      if (error.name === 'SequelizeUniqueConstraintError') {
        console.error(error);
        res.status(200).send({
          message:
            'ERROR - Duplicate Entry! Foreign key constrain. Only one Address record per user. Try updating the existing. change receiver/create to /receiver/update in URL',
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
exports.getAddress = (req, res) => {
  console.log(req.userId);
  Address.findOne({
    where: {
      user_id: req.userId,
    },
    attributes: {
      exclude: ['RoleRoleId'],
    },
  })
    .then((addressObj) => {
      console.log(addressObj);
      if (addressObj) {
        const address = {
          user_id: req.userId,
          address: addressObj.address,
          address_line_2: addressObj.address_line_2,
          city: addressObj.city,
          state: addressObj.state,
          zip: addressObj.zip,
          country: addressObj.country,
          location_name: addressObj.location_name,
        };
        res.send(address);
      } else {
        res.send({
          message: `Cannot get Address!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Address.',
      });
    });
};

// Update
exports.updateAddress = (req, res) => {
  Address.update(req.body.address, {
    where: { user_id: req.userId },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Address was updated successfully.',
        });
      } else if (num !== 1) {
        res.status( 404).send({
          message: `Cannot update Address. Address not found!`,
        });
      } else {
        res.send({
          message: `Cannot update Address. Maybe Address was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: 'Error updating Address.',
      });
    });
};

// Delete
