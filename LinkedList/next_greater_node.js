/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
	let result = []
	function recusive(prev,next){
		if(prev === null && next === null){
			return
		}else if(prev !== null && next === null){
			result.push(0)
		}else if(prev !== null && next !== null){
			recusive(prev.next,next.next)
			if(prev.val < next.val){
				result.unshift(next.val)
			}else{
				let currsize = result.length
				for(let i = 0; i < result.length; i++){
					if(prev.val < result[i]){
						result.unshift(result[i])
						break
					}
				}
				if(currsize === result.length){
					result.unshift(0)
				}
			} 
		}
	}
	recusive(head,head.next)
	return result
};

// let list1 = new ListNode(2)
// list1.next = new ListNode(1)
// list1.next.next = new ListNode(5)
// console.log(nextLargerNodes(list1))

// let list2 = new ListNode(2)
// list2.next = new ListNode(7)
// list2.next.next = new ListNode(4)
// list2.next.next.next = new ListNode(3)
// list2.next.next.next.next = new ListNode(5)
// console.log(nextLargerNodes(list2))

let list3 = new ListNode(9)
list3.next = new ListNode(7)
list3.next.next = new ListNode(6)
list3.next.next.next = new ListNode(7)
list3.next.next.next.next = new ListNode(6)
list3.next.next.next.next.next = new ListNode(9)
console.log(nextLargerNodes(list3))