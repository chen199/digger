# objectdigger

A lightweight util libray for digging objects/arrays, which contain nested objects/arrays. Useful for insights about large objects, and querying NoSQL databse as MongoDB.

## Install

```npm install objectdigger```

### Example 1: digger.dig

```
const digger = require('objectdigger');

var item = {
	"a": "a",
	"b": "b",
	"c": {
		"c1" : "c1",
		"c2" : "c2",
		"c3" : {
			"c3a" : "c3a",
			"c3b" : "c3b",
			"c3c" : [
				{ "c3ca" : "c3ca" },
				{ "c3cb" : "c3cb" },
				"zzz",
				{ 3: "444"}
			]
		}
	}

};


console.log(digger.dig(item));
```
Output:
```
{ a: 'a',
  b: 'b',
  'c.c1': 'c1',
  'c.c2': 'c2',
  'c.c3.c3a': 'c3a',
  'c.c3.c3b': 'c3b',
  'c.c3.c3c.c3ca': 'c3ca',
  'c.c3.c3c.c3cb': 'c3cb',
  'c.c3.c3c': 'zzz',
  'c.c3.c3c.3': '444' }
```

### Example 2: digger.findDeepest

```
const digger = require('objectdigger');

var item = {
	"a": "a",
	"b": "b",
	"c": {
		"c1" : "c1",
		"c2" : "c2",
		"c3" : {
			"c3a" : "c3a",
			"c3b" : "c3b",
			"c3c" : [
				{ "c3ca" : "c3ca" },
				{ "c3cb" : "c3cb" },
				"zzz",
				{ 3: "444"}
			]
		}
	}

};


console.log(digger.findDeepest(item));

```
Output:
```
{ maxKey: 'c.c3.c3c.c3ca', value: 'c3ca', depth: 3 }
```


### Test

Run:
```
mocha
```
