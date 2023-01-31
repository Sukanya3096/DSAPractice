# What is a Linked List?

It is a data structure. It stores whatever sort of data you want, strings, numbers, it doesn't matter. And it's ordered.

It's a list of data, just like an array. But there's a really big distinction in an array.

Each item is mapped, it's indexed with a number so any time we add something in, it gets an index that is mapped to its position.

A linked list, on the other hand, just consists of a bunch of elements with no indices who are just pointing to the next element.
Basically, Linked List is a data structure that contains a head, a tail and a length property. Linked Lists contains node and each node has a value and a pointer to another node or null

![singleLinkedList](https://user-images.githubusercontent.com/49310523/215096808-0749a9dd-59a9-42ad-beaa-17e9d1172ea5.png)

## Comparison with Arrays

***Lists:***

- Don't have indexes
- Connected via nodes with a **next** pointer
- Random access is not allowed

***Arrays:***
- indexed in order
- Insertion and deletion can be expensive
- Can be quickly accessed at a specific location

### **Big O of Singly Linked Lists:**
Insertion : O(1)
Removal : Removing at first => O(1), for other cases => O(n)
Search: O(n)
Access: O(n)

