const assert = require('assert');
const User = require('../src/user');

describe("Deleting a user", () => {
  let md;

  beforeEach((done) => {
    md = new User({ name: "Test user"});
    md.save()
      .then((user) => {
        console.log(user);
        done();
      });
  });

  it('model instance remove', (done) => {
    md.remove()
      .then(() => User.findOne({name: "Mahmud"}))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class method remove', (done) => {
    // Deletes every user with the given name
    User.remove({ name: "Mahmud"})
      .then(() => User.findOne({ name: 'Mahmud'}))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class method findAndRemove', (done) => {
    User.findOneAndRemove({ name: "Mahmud"})
      .then(() => User.findOne({ name: 'Mahmud'}))
      .then((user) => {
        assert(user === null);
        console.log("==> Removed by using findAndRemove");
        done();
      });
  });

  it('class method findByIdAndRemove', (done) => {
    User.findByIdAndRemove({ _id: md._id })
      .then(() => User.findOne({ _id: md._id }))
      .then((user) => {
        assert(user === null);
        console.log("==> Removed by using findByIdAndRemove");
        done();
      });
  });
});