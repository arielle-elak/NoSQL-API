const moment = require("moment");

// Standardizing dates in handlebars templates
function dateFormat(date) {
  // Format date as MM/DD/YYYY
  return moment(date).format("MM/DD/Y");
};

module.exports = { dateFormat };
