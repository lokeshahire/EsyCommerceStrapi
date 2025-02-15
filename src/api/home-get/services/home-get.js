'use strict';

/**
 * home-get service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-get.home-get');
