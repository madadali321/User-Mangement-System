const express = require('express');
const route = express.Router();
const services = require('../services/render')

route.get('/',services.homeRoutes);

route.get('/add-user',services.add_user);

route.get('/update-user',services.update_user);

route.get('/add-order',services.add_order);

route.get('/login',services.login);

module.exports = route;