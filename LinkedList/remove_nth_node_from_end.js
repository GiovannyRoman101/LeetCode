//Definition for singly-linked list.
// n is always valid no out of bounds
function ListNode(val) {
    this.val = val
    this.next = null
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    // no list 
    let fast = head
    let slow = head
    for(let i =0 ; i < n; i++){
        fast = fast.next
    }
    
    // remove first node
    if(fast == null){
        head = head.next
        return head
    }
    while(fast.next != null){
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
}
let list = new ListNode(1)
// list.next = new ListNode(2)
// list.next.next = new ListNode(3)
// list.next.next.next = new ListNode(4)
// list.next.next.next.next = new ListNode(5)

console.log(removeNthFromEnd(list,1))