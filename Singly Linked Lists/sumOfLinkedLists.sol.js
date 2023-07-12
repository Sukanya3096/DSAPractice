class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function sumOfLinkedLists(linkedListOne, linkedListTwo) {
   let current1 = linkedListOne;
    let current2 = linkedListTwo;
    let tempHead = new LinkedList(0);
    let currentNode = tempHead;
    let carry = 0;
  
  
    while(current1 != null || current2 != null || carry != 0) {
      let valueOne = current1 != null ? current1.value : 0;
      let valueTwo = current2 != null ? current2.value : 0;
  
      let sum = valueOne + valueTwo + carry;
      let newVal = sum % 10;
      let newNode = new LinkedList(newVal);
      currentNode.next = newNode;
      currentNode = newNode;
  
      carry = Math.floor(sum / 10);
  
      current1 = current1 != null ? current1.next : null;
      current2 = current2 != null ? current2.next : null;
    }

    return tempHead.next;
  }
  
  exports.LinkedList = LinkedList;
  exports.sumOfLinkedLists = sumOfLinkedLists;