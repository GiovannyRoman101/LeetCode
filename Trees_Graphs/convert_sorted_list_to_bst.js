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
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val){
	this.val = val
	this.left = this.right = null
}
// TODO:fix it
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(head === null){
		return new TreeNode(null)
	}else if(head.next === null){
		return new TreeNode(head.val)
	}
	let prev = null
	let slow = head
	let fast = head
	while(fast !== null && fast.next !== null){
		prev = slow
		slow = slow.next
		fast = fast.next
		slow = slow.next
	}
	let curr = head
	while(curr.next !== slow){
		curr = curr.next
	}
	curr.next = null
	let left = head
	let right = slow.next
	let root = new TreeNode(slow.val)
	root.left = sortedListToBST(left)
	root.right = sortedListToBST(right)
	return root
	
};

let list = new ListNode(-10)
list.next = new ListNode(-3)
list.next.next = new ListNode(0)
list.next.next.next = new ListNode(5)
list.next.next.next.next = new ListNode(9)

console.log(sortedListToBST(list))