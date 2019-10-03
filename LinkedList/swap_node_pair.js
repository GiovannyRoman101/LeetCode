//  Definition for singly-linked list.
function ListNode(val) {
    this.val = val
    this.next = null
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
	if(!head || !head.next){
		return head
	}
	let second = head.next
	let third = second.next
	second.next = head
	head.next = swapPairs(third)
	return second
}
let list1 = new ListNode(1)
list1.next = new ListNode(2)
list1.next.next = new ListNode(3)
list1.next.next.next = new ListNode(4)
list1.next.next.next.next = new ListNode(5)
list1.next.next.next.next.next = new ListNode(6)
console.log(swapPairs(list1))