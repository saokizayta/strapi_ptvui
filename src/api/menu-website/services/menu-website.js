'use strict';

/**
 * menu-website service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::menu-website.menu-website');
