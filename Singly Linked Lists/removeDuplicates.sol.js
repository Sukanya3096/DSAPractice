/* Q: You are given the head of a singly linked list whose nodes are in sorted order with respect to their values.
      Write a function that returns a modified version of the linked list that does not contain any nodes with duplicate values.
      The linked list should be modified in place and the modified linked list should still have its nodes sorted with respect to their value */


class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {

    let currentNode = linkedList;
    let distinctNode = currentNode.next;
    while(currentNode.next) {
      if(currentNode.value === currentNode.next.value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }
    return linkedList;
  }
  
  exports.LinkedList = LinkedList;
  exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;



  /* sample test case:

  {
    "linkedList": {
      "head": "1",
      "nodes": [
        {"id": "1", "next": "1-2", "value": 1},
        {"id": "1-2", "next": "1-3", "value": 1},
        {"id": "1-3", "next": "1-4", "value": 1},
        {"id": "1-4", "next": "1-5", "value": 1},
        {"id": "1-5", "next": "4", "value": 1},
        {"id": "4", "next": "4-2", "value": 4},
        {"id": "4-2", "next": "5", "value": 4},
        {"id": "5", "next": "6", "value": 5},
        {"id": "6", "next": "6-2", "value": 6},
        {"id": "6-2", "next": null, "value": 6}
      ]
    }
  }
  */
  
  