
/**
 * Initialize your data structure here.
 */
class RandomizedSet{
	constructor(){
		this.radSet = new Map()
	}
	/**
	 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
	 * @param {number} val
	 * @return {boolean}
	 */
	insert(val){
		if(this.radSet.has(val)){
			return false
		}
		this.radSet.set(val,val)
		return true
	}

	/**
	 * Removes a value from the set. Returns true if the set contained the specified element. 
	 * @param {number} val
	 * @return {boolean}
	 */
	remove(val){
		if(this.radSet.has(val)){
			this.radSet.delete(val)
			return true
		}
		return false
	}

	/**
	 * Get a random element from the set.
	 * @return {number}
	 */

	// TODO: make it O(1) time complexity 
	getRandom(){
		let arrset = this.radSet.keys()
		let key = Math.floor(Math.random()* Math.floor(this.radSet.size))
		arrset
		return arrset[key]
	}
}

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

let rset = new RandomizedSet()
rset.insert(1)
rset.insert(2)
console.log(rset.getRandom())