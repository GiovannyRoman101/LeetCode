class MyQueue {
    constructor() {
        this.stack = []
        this.substack = []
    }
    /**
     * Push element x to the back of queue.
     * @param {number} x
     * @return {void}
     */
    push(val) {
		this.stack.push(val)
	}
    /**
     * Removes the element from in front of queue and returns that element.
     * @return {number}
     */
    pop() {
		if(this.substack.length !==0){
			return this.substack.pop()
		}else{
			while(this.stack.length !==0){
				this.substack.push(this.stack.pop())
			}
			return this.substack.pop()
		}
	}
    /**
     * Get the front element.
     * @return {number}
     */
    peek() {
		if(this.substack.length !== 0){
			return this.substack[this.substack.length - 1]
		}else {
			while(this.stack.length !==0){
				this.substack.push(this.stack.pop())
			}
			return this.substack[this.substack.length - 1]
		}
	}
    /**
     * Returns whether the queue is empty.
     * @return {boolean}
     */
    empty() {
		if(this.stack.length === 0 && this.substack.length ===0){
			return true
		}
		return false
	}
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

let queue = new MyQueue()
queue.push(1)
queue.push(2)
console.log(queue.peek())
queue.pop()
queue.empty()