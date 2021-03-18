/* Write a Program to convert an array of objects to an object
	based on a given key */

//const convert = () => {
	function convert1(obj, key) {
		var newObj = {};
		obj.forEach(element => {
			newObj[element[key]] = element;
		});
		return newObj;
	}
	
	var newObj = convert1([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id');
	
	console.log(newObj);

//};


//module.exports = convert;
