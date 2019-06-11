// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
//Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function ListNode(val) {
    this.val = val
    this.next = null
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1,l2){
    let carry = 0
    let result = null
    let current

    while(l1 && l2){
        let sum = carry + l1.val + l2.val
        l1 = l1.next
        l2 = l2.next

        if(sum > 9){
            carry = 1
            sum = sum % 10
        } else{
            carry = 0
        }

        if(result === null){
            result = new ListNode(sum)
            current = result
        } else {
            current.next = new ListNode(sum)
            current = current.next
        }
    }

    while(l1){
        let sum = carry + l1.val
        l1 = l1.next
        if(sum > 9){
            carry = 1
            sum = sum % 10
        } else{
            carry = 0
        }
        if(result === null){
            result = new ListNode(sum)
            current = result
        } else {
            current.next = new ListNode(sum)
            current = current.next
        }
    }
    while(l2){
        let sum = carry + l2.val
        l2 = l2.next
        if(sum > 9){
            carry = 1
            sum = sum % 10
        } else{
            carry = 0
        }
        if(result === null){
            result = new ListNode(sum)
            current = result
        } else {
            current.next = new ListNode(sum)
            current = current.next
        }
    }
    if(carry === 1){
        current.next = new ListNode(carry)
        current = current.next
    }

    return result
}

let l1 = new ListNode(5)


let l2 = new ListNode(5)


console.log(addTwoNumbers(l1,l2))