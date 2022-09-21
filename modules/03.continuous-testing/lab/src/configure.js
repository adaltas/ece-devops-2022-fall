const mixme = require('mixme')
const config_default = require('../conf/default')

module.exports = (config_custom = {}) => {
  const config = mixme.merge(config_default, config_custom)
  return config
}
