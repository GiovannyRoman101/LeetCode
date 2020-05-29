
class CustomStack{
	constructor(maxSize){
		this.maxSize = maxSize
		this.stack = []
	}
	push(x){
		if(this.stack.length < this.maxSize){
			this.stack.push(x)
		}
	}
	pop(){
		if(this.stack.length === 0){
			return -1
		}else{
			return this.stack.pop()
		}
	}
	increment(k,val){
		for(let i = 0 ; i < this.stack.length; i++){
			if(i < k){
				this.stack[i] += val
			}else{
				break
			}
		}
	}
}