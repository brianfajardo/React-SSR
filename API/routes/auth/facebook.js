module.exports = {
  callback(req, res) {
    console.log('callback hit from oAuth! 🔥')
    // Do something after successful Facebook oAuth.
    res.redirect('/')
  },
}
