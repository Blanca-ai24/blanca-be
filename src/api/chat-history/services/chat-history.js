'use strict';

/**
 * chat-history service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chat-history.chat-history');
