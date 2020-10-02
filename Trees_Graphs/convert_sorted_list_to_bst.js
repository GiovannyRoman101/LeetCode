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
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
	if(head === null){
		return null
	}else if(head !== null && head.next === null){
		return new TreeNode(head.val)
	}else{
		let curr = head
		let fast = head
		let prev = curr
		while(fast !== null && fast.next !== null){
			prev = curr
			fast = fast.next
			curr = curr.next
			if(fast !== null && fast.next !== null){
				fast = fast.next
			}
		}
		let root = new TreeNode(curr.val)
		root.right = sortedListToBST(curr.next)
		prev.next = null
		root.left = sortedListToBST(head)

		return root
	}
}



let list = new ListNode(-10)
list.next = new ListNode(-3)
list.next.next = new ListNode(0)
list.next.next.next = new ListNode(5)
list.next.next.next.next = new ListNode(9)

console.log(sortedListToBST(list))