const assert = require('assert');
const User = require('../src/user');

describe('Updating user', () => {
  let md;

  beforeEach((done) => {
    md = new User({ name: "Test user"});
    md.save()
      .then((user) => {
        console.log(user);
        done();
      });
  });

  it('instance type using set n save', (done) => {
    md.set('name', 'Alex');
    md.save()
      .then(() => User.find({ name: "Alex"}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === "Alex");
        done();
      });
  });

  it('instance type using update', (done) => {
    md.update({ name: "Alex"})
      .then(() => User.find({ name: "Alex"}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === "Alex");
        done();
      });
  });

  it('Class method using update', (done) => {
    User.update({ name: "Alex"})
      .then(() => User.find({ name: "Alex"}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === "Alex");
        done();
      });
  });

  it('Class method using findOneAndUpdate', (done) => {
    User.findOneAndUpdate({ name: "Alex"})
      .then(() => User.find({ name: "Alex"}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === "Alex");
        done();
      });
  });

  it('Class method using findByIdAndUpdate', (done) => {
    User.findByIdAndUpdate(md._id, {name: "Alex"})
      .then(() => User.find({ _id: md._id }))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === "Alex");
        done();
      });
  });

});