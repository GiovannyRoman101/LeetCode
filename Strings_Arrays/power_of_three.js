var isPowerOfThree = function(n) {
	if(n === 1){
		return true
	}else if( n < 1){
		return false
	}else{
		return isPowerOfThree(n/3)
	}
};

console.log(isPowerOfThree(27))