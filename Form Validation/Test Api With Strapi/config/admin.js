module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '94e3ecf941362a66531181848f478476'),
  },
});
