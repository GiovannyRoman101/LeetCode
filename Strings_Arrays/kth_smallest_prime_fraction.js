/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(A, K) {
	let pqueue = []
	for(let i = 0; i < A.length; i++){
		for(let j = A.length-1; j >= 0; j--){
			let contain = false
			if(A[i] >= A[j]){
				break
			}else{
				let frac = new Fraction(A[i],A[j])
				for(let k = 0; k < pqueue.length; k++){
					if(pqueue[k].value > frac.value){
						pqueue.splice(k,0,frac)
						contain = true
						break
					}
				}
				if(!contain){
					pqueue.push(frac)
				}
			}
		}
	}
	return [pqueue[K-1].numerator,pqueue[K-1].denominator]
};

function Fraction(numerator, denominator){
	this.numerator = numerator
	this.denominator = denominator
	this.value = numerator / denominator
}
console.log(kthSmallestPrimeFraction([1, 2, 3, 5],3))
console.log(kthSmallestPrimeFraction([1, 7],1))