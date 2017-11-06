module.exports = (req, res, next) => {
  // If a user object does not exist from a cookie session, send error!
  if (!req.user) return res.status(401).send({ error: 'Unauthorized request! ❌' })
  return next()
}
