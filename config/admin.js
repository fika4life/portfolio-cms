module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1e54d75a902b32cff3b12f9065afe376'),
  },
});
