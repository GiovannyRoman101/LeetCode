// TODO: Fix in java
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
	this.queue = []
	this.tmp = []
}

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
	
    if(this.queue.length ===1){
		return this.queue.pop()
	}else{
		while(this.queue.length !== 1){
			this.tmp.push(this.queue.pop())
		}
		let first = this.queue.pop()
		while(this.tmp.length !==0){
			this.queue.push(this.tmp.length)
		}
		return first
	}
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
	let topV
    if(this.queue.length ===1){
		topV = this.queue.pop()
		this.queue.push(topV)
		return topV
	}else{
		while(this.queue.length !== 1){
			this.tmp.push(this.queue.pop())
		}
		topV = this.queue.pop()
		this.queue.push(topV)
		while(this.tmp.length !==0){
			this.queue.push(this.tmp.length)
		}
		return first
	}
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

