class MinStack{
	constructor(){
		this.min = Infinity
		this.stack =[]
	}

	push(x){
		if(x < this.min ){
			this.min = x
		}
		this.stack.push(x)
	}

	pop(){
		let val = this.stack.pop()
		if(val === this.min){
		}
	}

	top(){
		return this.stack[this.stack.length-1]
	}
	getMin(){
		return this.min
	}
}