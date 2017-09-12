// Contains any code that need to setup our testing environment

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://127.0.0.1:27017/users_test');
  mongoose.connection
    .once('open', () => {
      console.log("################Connection has opned##############");
      done();
    })
    .on('error', (error) => {
      console.log("Warning", error);
    });
});

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    console.log("Collection deleted");
    done();
  });
});
