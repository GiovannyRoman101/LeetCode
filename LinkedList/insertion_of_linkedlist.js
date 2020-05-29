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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
	let map = new Map()
	if(!headA || !headB){
		return null
	}
	let pointA = headA
	let pointB = headB
	while(pointA){
		map.set(pointA,pointA)
		pointA = pointA.next
	}
	
	while(pointB){
		let val = map.get(pointB)
		if(val !== undefined){
			return pointB
		}
		pointB = pointB.next
	}
	return null
}

let list1 = new ListNode(4)
list1.next = new ListNode(1)
list1.next.next = new ListNode(8)
list1.next.next.next = new ListNode(4)
list1.next.next.next.next = new ListNode(5)

let list2 = new ListNode(5)
list2.next = new ListNode(0)
list2.next.next = new ListNode(1)
list2.next.next.next = list1.next.next


console.log(getIntersectionNode(list1,list2))