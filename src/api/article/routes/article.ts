/**
 * article router.
 */

import { factories } from "@strapi/strapi";

const { createCoreRouter } = factories;

export default createCoreRouter("api::article.article");
