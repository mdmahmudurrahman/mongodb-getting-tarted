// Installed by default with the mocha
const assert = require('assert');
const User = require('../src/user');

describe("Creating records", () => {
  it("saves a user", (done) => {
    // assert(1 + 1 === 2);
    const user1 = new User({name: "Mahmud Rahman"});
    user1.save()
      .then(() => {
      assert(!user1.isNew);
      done();
    });
  });
});
