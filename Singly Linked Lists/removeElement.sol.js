class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeKthNodeFromEnd(head, k) {
    // Write your code here.
    let first = head;
    let second = head;
    let counter = 1;
    while(counter <= k) {
      second = second.next;
      counter += 1;
    }
    if(second == null) {
      head.value = head.next.value;
      head.next = head.next.next;
      return;
    }
  while(second.next) {
    second = second.next;
    first = first.next;
  }  
    first.next= first.next.next;
    }
  
  
  exports.LinkedList = LinkedList;
  exports.removeKthNodeFromEnd = removeKthNodeFromEnd;