class Queue {
    array = [];
  /**
   * Add item to queue
   * @param {number} value
   */
  enqueue(value) {
    this.array.push(value);
  }

  /**
   * Get item from queue
   */
  dequeue() {
      const firstItem = this.array[0];
      this.array = this.array.splice(1, this.array.length)
      return firstItem
  }
}

const queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

const firstItem = queue.dequeue();
const secondItem = queue.dequeue();
const thridItem = queue.dequeue();

console.log({firstItem, secondItem, thridItem});