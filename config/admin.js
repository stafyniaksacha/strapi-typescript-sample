module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'af70aa0529c6ea009cd89174b90ba3d9'),
  },
});
