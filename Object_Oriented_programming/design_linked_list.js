/**
 * Initialize your data structure here.
 */
function Node(val){
	this.val = val
	this.next = null
}

class MyLinkedList{
	constructor(){
		this.head = null
	}

	/**
	 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
	 * @param {number} index
	 * @return {number}
	*/
	get(index){
		let counter = 0
		if(index < 0){
			return -1
		}
		if(this.head === null){
			return this.head
		}else if (this.head.next === null && index === 0){
			return this.head.val
		}
		let curr = this.head
		while(curr !== null){
			counter++
			curr = curr.next
			if(counter === index){
				return curr.val
			}
		}
		if(counter < index){
			return -1
		}
	}
	/**
	 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
	 * @param {number} val
	 * @return {void}
	 */
	addAtHead(val){
		let newHead = new Node(val)
		if(this.head === null){
			this.head = newHead
		}else{
			newHead.next = this.head
			this.head = newHead
		}
	}

	/**
	 * Append a node of value val to the last element of the linked list. 
	 * @param {number} val
	 * @return {void}
	 */
	addAtTail(val){
		let newElem = new Node(val)
		if(this.head === null){
			this.head = newElem
		}
		let curr = this.head
		while(curr !== null &curr.next !==null){
			curr = curr.next
		}
		curr.next = newElem
	}
	/**
	 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
	 * @param {number} index 
	 * @param {number} val
	 * @return {void}
	 */
	addAtIndex(index, val){
		let newNode = new Node(val)
		if(index === 0){
			this.addAtHead(val)
		}
		let counter = 0
		let prev = null
		let curr = this.head

		while(curr !== null){
			counter++
			prev = curr
			curr = curr.next
			if(counter === index){
				break
			}
		}
		if(counter > index){
			return 
		}
		newNode.next = curr
		prev.next = newNode
	}

	/**
	 * Delete the index-th node in the linked list, if the index is valid. 
	 * @param {number} index
	 * @return {void}
	 */
	deleteAtIndex(index){
		if(index < 0){
			return
		}
		if(index === 0 && this.head !== null){
			this.head = this.head.next
			return
		}
		let counter = 0
		let prev = null
		let curr = this.head
		while(curr !==null){
			counter++
			prev = curr
			curr = curr.next
			if(counter === index){
				break
			}
		}
		prev.next = curr.next
	}
}

let list = new MyLinkedList()
list.addAtHead(1)
list.addAtTail(3)
console.log(list)
list.addAtIndex(1,2)
list.get(1)
list.deleteAtIndex(1)
console.log(list)
list.get(1)