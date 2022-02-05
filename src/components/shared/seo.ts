export default {
  collectionName: "components_shared_seos",
  info: {
    displayName: "seo",
    icon: "search",
    description: "",
  },
  options: {},
  attributes: {
    metaTitle: {
      required: true,
      type: "string",
      maxLength: 60,
    },
    metaDescription: {
      type: "string",
      required: true,
      maxLength: 160,
      minLength: 50,
    },
    metaImage: {
      type: "media",
      multiple: false,
      required: true,
      allowedTypes: ["images", "files", "videos"],
    },
    metaSocial: {
      type: "component",
      repeatable: true,
      component: "shared.meta-social",
    },
    keywords: {
      type: "text",
      regex: "[^,]+",
    },
    metaRobots: {
      type: "string",
      regex: "[^,]+",
    },
    structuredData: {
      type: "json",
    },
    metaViewport: {
      type: "string",
    },
    canonicalURL: {
      type: "string",
    },
  },
};
