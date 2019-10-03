/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let sort = {}
    let curr = null
    if (!l1) {
        return l2
    } else if (!l2) {
        return l1
    } else {
        if (l1.val <= l2.val) {
            sort = l1
            l1 = l1.next
        } else {
            sort = l2
            l2 = l2.next
        }
        curr = sort
        while (l1 && l2) {
            if (l1.val <= l2.val) {
                curr.next = l1
                curr = curr.next
                l1 = l1.next
            } else {
                curr.next = l2
                curr = curr.next
                l2 = l2.next
            }
        }
        if (l1) {
            curr.next = l1
        } else if (l2) {
            curr.next = l2
        }
        return sort
    }
}
