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
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(head, node) {
    if (!head) {
        return head
    } else if (head.val === node) {
        head = head.next
    } else {
        let curr = head.next
        let prev = head
        while (curr) {
            if (curr.val === node) {
                prev.next = curr.next
                break
            }
            prev = prev.next
            curr = curr.next
        }
    }
}
// this is stupid
var deleteNode = function(node) {
	node.val = node.next.val
	node.next = node.next.next
}

let list = new ListNode(4)
list.next = new ListNode(5)
list.next.next = new ListNode(1)
list.next.next.next = new ListNode(9)

deleteNode(list,5)
console.log(list)