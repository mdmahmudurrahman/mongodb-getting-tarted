const assert = require('assert');
const User = require('../src/user');

describe("Reading users out of the database", () => {
  let user1;
  beforeEach((done) => {
    user1 = new User({name: "Mahmud"});
    user1.save()
      .then(() => {
        done();
      });
  });

  it("finds all users with a name 'Mahmud'", (done) => {
    User.find({name: "Mahmud"})
      .then((users) => {
        console.log(users[0]._id);
        console.log(user1._id);
        // Here toString is using to get the id as a raw string
        assert(users[0]._id.toString() == user1._id.toString());
        done();
      });
  });
});
