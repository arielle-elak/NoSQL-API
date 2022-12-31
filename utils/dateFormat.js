// Simple built-in Javascript function to convert timestamp to date string

const dateFormat = (timestamp) => {

  const date = timestamp.toDateString();

  return date;
};

module.exports = dateFormat;
