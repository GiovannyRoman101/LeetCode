/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
	if(x + y < z){
		return false
	}else if(x === z || y === z || (x+y) === z){
		return true
	}
	return z % gcd(x,y)=== 0
	
};

function gcd( x, y){
	if(x === 0){
		return y
	}else if (y ===0){
		return x
	}else{
		return gcd(y, x %y)
	}
}

console.log(canMeasureWater(3,4,5))