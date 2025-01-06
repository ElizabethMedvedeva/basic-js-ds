const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class List {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  getUnderlyingList() {
    if(this.length !== 0) {
      let currentElement = this.head;
      return JSON.parse(JSON.stringify(currentElement));
    }
  }

  enqueue(value) {
    if(this.length === 0) {
      this.head = new List(value);
    } else {
      let currentElement = this.head;
      while(currentElement.next) {
        currentElement = currentElement.next;
      }
      currentElement.next = new List(value);
    }
    this.length++;
  }

  dequeue() {
let currentElement = this.head;
this.head = currentElement.next;
return currentElement.value;
  }
}

module.exports = {
  Queue
};
