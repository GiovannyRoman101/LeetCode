/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = val === undefined ? null : val
    this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (head === null || (head!== null && head.next === null)) {
        return head
    } else {
        let curr = head
        let lefth = null
        let righth = null
        let left = null
        let right = null
        while (curr !== null) {
            if (curr.val < x) {
                if (lefth === null) {
                    lefth = curr
                    left = lefth
                } else {
                    left.next = curr
                    left = left.next
                }
            } else {
                if (righth === null) {
                    righth = curr
                    right = righth
                } else {
                    right.next = curr
                    right = right.next
                }
            }
            curr = curr.next
		}
		if(lefth !== null && righth !== null){
			left.next = righth
			right.next = null
			return lefth
		}else if(lefth !== null && righth === null){
			return lefth
		}else {
			return righth
		}
    }
}

let list = new ListNode(1)
list.next = new ListNode(4)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(2)
list.next.next.next.next = new ListNode(5)
list.next.next.next.next.next = new ListNode(2)

console.log(partition(list, 3))
