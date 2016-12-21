const assert = require('assert');
const User = require('../src/user')


describe('Reading users from database', () => {
	let joe;

	beforeEach((done) => {
		joe = new User({ name: 'Joe' });
		joe.save()
			.then(() => done());
	});

	it('Finds all users with the name of joe', (done) => {
		User.find({ name: 'Joe' })
			.then((users) => {
				assert(users[0]._id.toString() === joe.id.toString());
				done();
			});
	});
});