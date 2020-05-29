/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val
    this.next = null
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	if(head === null || head.next === null){
		return true
	}
	let stack = []
	let curr = head

	while(curr !== null){
		stack.push(curr)
		curr = curr.next
	}
	curr = head
	while(stack.length !== 0){
		if(stack.pop().val !== curr.val){
			return false
		}
		curr = curr.next
	}
	return true
}

let list = new ListNode(1)
list.next = new ListNode(2)

let list2 = new ListNode(1)
list2.next = new ListNode(2)
list2.next.next = new ListNode(3)
list2.next.next.next = new ListNode(2)
list2.next.next.next.next = new ListNode(1)

console.log(isPalindrome(list))
console.log(isPalindrome(list2))