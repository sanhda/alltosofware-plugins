const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/allto_plugins_dev');
      } catch (error) {
        handleError(error);
      }
}

module.exports = { connect };
