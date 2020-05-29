/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val){
	this.val = val
	this.next = null
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(head === null || head.next === null){
		return head
	}
	let prev = null
	let slow = head
	let fast = head
	while(fast !== null && fast.next !== null){
		prev = slow
		slow = slow.next
		fast = fast.next
	}
	prev.next = null
	let left = sortList(head)
	let right = sortList(slow)
	return merge(left,right)

};

function merge(l1,l2){
	if(l1 === null && l2 === null){
		return l1
	}else if(l1 !== null && l2 === null){
		return l1
	}else if(l1 === null && l2 !== null){
		return l2
	}else{
		let sort = null
		if(l1.val > l2.val){
			sort = l2
			l2 = l2.next
		}else {
			sort = l1
			l1 = l1.next
		}
		let head = sort
		while(l1 !== null && l2 !== null){
			if(l1.val > l2.val){
				sort.next = l2
				l2 = l2.next
			}else {
				sort.next = l1
				l1 = l1.next
			}
			sort = sort.next
		}
		if(l1 === null && l2 !== null){
			sort.next = l2
		}else if(l1 !== null && l2 === null){
			sort.next = l1
		}
		return head
	}
}

let list = new ListNode(4)
list.next = new ListNode(2)
list.next.next = new ListNode(1)
list.next.next.next = new ListNode(3)

console.log(sortList(list))

