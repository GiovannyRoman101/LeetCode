var removeElements = function(head, val) {
    if(!head){
        return null
    }
    let next = head.next
    let prev = head
    while(next){
        if(next.val === val){
            next = next.next
            prev.next = next
        } else{
            prev = next
            next = next.next
        }
    }
    if(head.val === val){
        return head.next
    }
    return head
};