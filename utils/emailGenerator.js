const emailGenerator = function () {
  let randomString = (Math.random() + 1).toString(36).substring(7)
  return randomString + '@mailinator.com'
}

module.exports = emailGenerator
