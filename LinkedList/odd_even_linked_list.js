/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val,next){
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : val )
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head === null){
		return null
	}else if((head !== null && head.next === null)||(head !== null && head.next !== null && head.next.next == null )){
		return head
	}else {
		let odd = head
		let even = head.next
		let ptro = odd
		let ptre = even
		let curr = even.next
		while(curr !== null ){
			ptro.next = curr
			curr= curr.next
			ptro = ptro.next
			if(curr !== null ){
				ptre.next = curr
				curr = curr.next
				ptre = ptre.next
			}
		}
		ptre.next = null
		ptro.next = even
		return odd
	}
}

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)

console.log(oddEvenList(head))