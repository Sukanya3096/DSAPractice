// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  exports.LinkedList = LinkedList;
  
  function mergingLinkedLists(linkedListOne, linkedListTwo) {
    // Write your code here.
    let first = linkedListOne;
    let second = linkedListTwo;
  
    while(first != second) {
      first = first === null ? linkedListTwo : first.next;
      second = second === null ? linkedListOne : second.next;
    }
    return first;
  }
  
  // Do not edit the line below.
  exports.mergingLinkedLists = mergingLinkedLists;
  