/**
 * article service.
 */

import { factories } from '@strapi/strapi';

const { createCoreService } = factories;

export default createCoreService('api::article.article', {
  find(ctx) {
    strapi.log.info('hello from typescript service');
    return super.find(ctx);
  }
})