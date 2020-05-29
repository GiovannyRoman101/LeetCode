/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// TODO: Detect Loop, reset and find the point where it starts
function ListNode(val){
	this.val = val
	this.next = null
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
	if(head === null || head.next === null){
		return null
	}
	let slow = head
	let fast = head.next

	while(fast !== null || fast.next !== null){
		if(fast === slow){
			break
		}
		slow = slow.next
		fast = fast.next
		if(fast !== null && fast.next !== null){
			fast = fast.next
		}
	}

	if(slow === fast){
		slow = head
		while(fast !== slow){
			slow = slow.next
			fast = fast.next
		}
		return slow
	}

	return null
}

let l1 = new ListNode(3)
l1.next = new ListNode(2)
l1.next.next = new ListNode(0)
l1.next.next.next = new ListNode(-4)
l1.next.next.next.next = l1.next

let l2 = new ListNode(1)
l2.next = new ListNode(2)
l2.next.next = l2

let l3 = new ListNode(1)
console.log(detectCycle(l1))