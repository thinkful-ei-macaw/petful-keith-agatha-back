class Queue {
  constructor() {
    // Set initial data.
    this.first=null;
    this.last=null;
  }

  enqueue(data) {
    // Add some data to the queue.
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;}
    if (this.last) {
      this.last.next = node;}
    this.last = node;
  }

  dequeue() {
    // Remove some data from the queue.
    if (this.first === null) {
      return;}
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;}
    return node.value;
  }

  show() {
    if (!this.first) {
      return null;}
    return this.first.value;
  }

  all() {
    let node = this.first;
    let newArray = [];
    while (node !== null) {
      newArray.push(node.value);
      node = node.next;}
    return newArray;
  }
}

class _Node {
  constructor(val) {
    this.value = val;
    this.next = null;}
}

module.exports = Queue;
