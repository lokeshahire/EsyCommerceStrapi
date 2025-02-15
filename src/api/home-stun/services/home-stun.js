'use strict';

/**
 * home-stun service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-stun.home-stun');
