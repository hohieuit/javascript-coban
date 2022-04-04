class Stack {
    array = []
  /**
   * Add item to stack
   * @param {number} value
   */
  push(value) {
      this.array.push(value)
  }

  /**
   * Get last item
   */
  pop() {
      return this.array.pop();
  }
}


const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)


const firstItem = stack.pop();
const secondItem = stack.pop();
const thridItem = stack.pop();

console.log({firstItem, secondItem, thridItem});