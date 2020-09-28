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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
	if(lists === null || lists.length === 0){
		return null
	}
	if( lists.length ===1){
		return lists.pop()
	}
	while(lists.length > 1){
		let temp = merge(lists.shift(),lists.shift())
		if(temp !== null){
			lists.push(temp)
		}
	}
	if(lists.length === 0){
		return null
	}
	return lists.pop()
}
function merge (list1, list2){
	if(list1 === null && list2 === null){
		return list1
	}else if(list1 === null && list2 !== null){
		return list2
	}else if(list1 !== null && list2 === null){
		return list1
	}else{
		let temp = null
		if(list1.val <= list2.val){
			temp = list1
			list1 = list1.next
		}else{
			temp = list2
			list2 = list2.next
		}
		let curr = temp
		while(list1 !== null && list2 !== null){
			if(list1.val <= list2.val){
				curr.next = list1
				list1 = list1.next
				curr = curr.next
			}else{
				curr.next = list2
				list2 = list2.next
				curr = curr.next
			}
		}
		if(list1 !== null && list2 === null){
			curr.next = list1
		}
		if(list1 === null && list2 !== null){
			curr.next = list2
		}
		return temp
	}
}
let list1 = new ListNode(1)
list1.next = new ListNode(4)
list1.next.next = new ListNode(5)
let list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next  = new ListNode(4)
let list3 = new ListNode(2)
list3.next = new ListNode(6)

//console.log(mergeKLists([list1,list2,list3]))
console.log(mergeKLists([null,null]))