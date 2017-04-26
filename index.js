
module.exports = function () {
	var newObj = {};

	var createFlatObject = function(object){
		newObj = {};
		var keys = Object.keys(object);
		keys.forEach(function(key){
			if(isSimpleValue(object[key])){
				newObj[key] = object[key];
			} else {
				keepDrill(key, object[key])
			}
		});
		return newObj
	};

	var keepDrill = function (key, value) {
		if( Object.prototype.toString.call( value ) === '[object Array]' ) {
			value.forEach(function(item){
				if(isSimpleValue(item)) {
					newObj[key] = item;
				} else if(Object.prototype.toString.call( item ) === '[object Object]'){
					var keys = Object.keys(item);
					keys.forEach(function(nested_key){
						keepDrill(key + "." + nested_key, item[nested_key]);
					});
				}
			});
		} else if (Object.prototype.toString.call( value ) === '[object Object]') {
			var keys = Object.keys(value);
			keys.forEach(function (new_key) {
				if(isSimpleValue(value[new_key])) {
					newObj[key + "." + new_key] = value[new_key];
				} else {
					keepDrill(key + "." + new_key, value[new_key]);
				}
			})
		} else {
			newObj[key] = value;
		}
	};

	var isSimpleValue = function(value) {
		switch (typeof(value)) {
			case "string":
				return true;
			case "number":
				return true;
			case "boolean":
				return true;
			default:
				return false;
		}
	};

	return {
		dig: createFlatObject
	};

}
