const dayjs = require('dayjs');

const getCreated = function d() {
  return dayjs().format('DD.MM.YY HH:mm');
}
module.exports = getCreated;

