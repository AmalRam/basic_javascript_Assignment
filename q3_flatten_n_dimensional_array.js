/* Write a Program to Flatten a given n-dimensional array */

//const flatten = () => {
	var flatten1 = function (array,result) {
		result ===undefined && (result =[]);

		for( var i=0,len= array.length; i<len; i++) {
			if(Object.prototype.toString.call(array[i])==='[object Array]') {
				flatten1(array[i],result); 
			} else {
				result.push(array[i]);
			}
		}
	
	
		return result;
	  };
	
	  console.log(flatten1([1, [2, 3],["a","b","c"], [[4], [5]] ]));


//};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

//module.exports = flatten;
