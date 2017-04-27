var assert = require('assert');
var digger = require('../index');

describe('Digger test - flatObject', function(){
	describe('Simple test', function() {
		it('Receives an object, and returns a flat one', function () {
			var obj = {
				a: "a",
				b: "b",
				c: {
					a: 1,
					b: 2,
					c: 3
				}
			};
			var result = digger.dig(obj);
			assert.equal(Object.keys(result).length, 5)
			assert.deepEqual(result,
			  {
			  	a: "a", b: "b", "c.a":1, "c.b":2, "c.c": 3
			  })
		});

		it('Receives an object with array, and returns a flat one', function () {
			var obj = {
				a: "a",
				b: "b",
				c: [
					{ a: 1 },
					{ b: 2 },
					{ c: {
						d: 3
					} }
				]
			};
			var result = digger.dig(obj);
			assert.equal(Object.keys(result).length, 5);
			assert.deepEqual(result,
			  {
				  a: "a", b: "b", "c.a":1, "c.b":2, "c.c.d": 3
			  })
		})
	});
});