/**
 * article router.
 */

import { factories } from "@strapi/strapi";

const { createCoreController } = factories;

export default createCoreController("api::article.article", {
  find(ctx) {
    strapi.log.info('hello from typescript controller');
    return super.find(ctx);
  }
});
