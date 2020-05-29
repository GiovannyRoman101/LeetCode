/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
	let flag = false
	if(head === null){
		return head
	}

	while(head !== null && head.next !== null && head.val === head.next.val){
		head = head.next
		flag = true
	}
	if(flag){
		return deleteDuplicates(head.next)
	}
	
	let first = head
	let second = head.next
	let third = null

	if(second !== null){
		third = second.next
	}

	while(second !== null && third !== null){
		if(second.val != third.val){
			first = second
			second = third
			third = third.next
		} else{
			while(second !== null && third !== null && second.val === third.val){
				third = third.next
			}
			second = third
			first.next = second
			if(third != null){
				third = third.next
			}
			
		}
	}
	return head
};

let list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(3)
list.next.next.next.next = new ListNode(4)
list.next.next.next.next.next = new ListNode(4)
list.next.next.next.next.next.next = new ListNode(5)
console.log(deleteDuplicates(list))

let list2 = new ListNode(1)
list2.next = new ListNode(1)
list2.next.next = new ListNode(2)
list2.next.next.next = new ListNode(2)

console.log(deleteDuplicates(list2))