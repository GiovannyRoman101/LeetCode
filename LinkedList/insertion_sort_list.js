/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    if (!head){ 
		return null
	}
    let sorted = head
    head = head.next
    sorted.next = null
    while (head) {
        let prev = null
        let node = sorted
        while (node && head.val > node.val) {
            prev = node
            node = node.next
        }
        let insert = head
        head = head.next
        insert.next = node
        if (prev) {
            prev.next = insert
        } else {
            sorted = insert
        }
    }
    return sorted
}

let list = new ListNode(6)
list.next = new ListNode(5)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(1)
list.next.next.next.next = new ListNode(8)
list.next.next.next.next.next = new ListNode(7)
list.next.next.next.next.next.next = new ListNode(2)
list.next.next.next.next.next.next.next = new ListNode(4)
console.log(insertionSortList(list))