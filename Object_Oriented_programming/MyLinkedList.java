package Object_Oriented_programming;

class MyLinkedList {
	
	class Node{
		public Node next;
		public int val;
		
		public Node(int val) {
			this.val = val;
			this.next = null;
		}
	}
	private Node head;
    /** Initialize your data structure here. */
    public MyLinkedList() {
        this.head = null;
    }
    
    /** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
    public int get(int index) {
        if(index < 0) {
			return -1;
        }else if(index == 0 && this.head != null) {
			return this.head.val;
        }else {
			int counter = 0;
			Node curr = this.head;
			while(curr != null) {
				counter++;
				curr = curr.next;
				if(counter == index && curr != null) {
					return curr.val;
				}
			}
			return -1;
        }
    }
    
    /** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
    public void addAtHead(int val) {
    	Node newHead = new Node(val);
        if(this.head == null) {
        	this.head = newHead;
        }else {
        	newHead.next = this.head;
        	this.head = newHead;
        }
    }
    
    /** Append a node of value val to the last element of the linked list. */
    public void addAtTail(int val) {
        Node newTail = new Node(val);
        if(this.head == null) {
        	this.head = newTail;
        }else {
        	Node curr = this.head;
        	while(curr != null && curr.next!= null) {
        		curr = curr.next;
        	}
        	curr.next = newTail;
        }
    }
    
    /** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
    public void addAtIndex(int index, int val) {
        if(index ==0) {
        	addAtHead(val);
        }else if(this.head != null) {
        	int counter =0;
        	Node newElem = new Node(val);
        	Node prev = null;
        	Node curr = this.head;
        	while(curr != null) {
        		counter++;
        		prev = curr;
        		curr = curr.next;
        		if(counter == index) {
        			break;
        		}
        	}
        	if(counter == index) {
        		prev.next = newElem;
        		newElem.next = curr;
        	}
        }
    }
    
    /** Delete the index-th node in the linked list, if the index is valid. */
    public void deleteAtIndex(int index) {
        if(index <0 || this.head == null) {
        	return;
        }else if(index == 0) {
        	this.head = this.head.next;
        }else {
        	int counter = 0;
        	Node prev = null;
        	Node curr = this.head;
        	while(curr != null) {
        		counter++;
        		prev = curr;
        		curr = curr.next;
        		if(counter == index) {
        			break;
        		}
        	}
        	if(counter != index || curr == null) {
        		return;
        	}
        	prev.next = curr.next;
        }
    }
    
    public static void main(String[] args) {
    	MyLinkedList list = new MyLinkedList();
    	list.addAtHead(1);
    	list.addAtTail(3);
    	list.addAtIndex(1, 2);
    	System.out.println(list.get(1));
    	list.deleteAtIndex(1);
    	System.out.println(list.get(1));
    }
}