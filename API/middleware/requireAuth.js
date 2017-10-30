module.exports = (req, res, next) => {
  // If a user object does not exist from a cookie session, send error!
  if (!req.user) return res.send('Unauthorized request! ❌').status(401)
  return next()
}
