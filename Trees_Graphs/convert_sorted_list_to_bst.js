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
	
};



let list = new ListNode(-10)
list.next = new ListNode(-3)
list.next.next = new ListNode(0)
list.next.next.next = new ListNode(5)
list.next.next.next.next = new ListNode(9)

console.log(sortedListToBST(list))