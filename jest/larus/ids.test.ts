const ids = require('./../../src/larus/ids');

test('the first uid generated is 1', () => {
	expect(ids.getUid({})).toBe(1);
});

test('the uid is set only once on an object', () => {
	var obj = {};
	expect(ids.getUid(obj)).toBe(2);
	expect(ids.getUid(obj)).toBe(2);
});

test('the version is latest', () => {
	expect(ids.VERSION).toBe('latest');
});