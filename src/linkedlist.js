import Node from "./nodes.js";

export default class LinkedList {
  #head = null;

  #tail = null;

  #size = 0;

  append(value) {
    const node = new Node(value);
    if (!this.#head) {
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail.next = node;
      this.#tail = node;
    }
    this.#size += 1;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.#head) {
      this.#head = node;
      this.#tail = node;
    } else {
      node.next = this.#head;
      this.#head = node;
    }
    this.#size += 1;
  }

  size() {
    console.log("Number of elements:", this.#size);
  }

  head() {
    console.log("The first element is:", this.#head.value);
  }

  tail() {
    console.log("The last element is:", this.#tail.value);
  }

  at(index) {
    let current = this.#head;
    const values = [];
    while (current) {
      values.push(current);
      current = current.next;
    }
    console.log(`At ${index} there is: ${values[index].value}`);
  }

  pop() {
    if (!this.#head) return;

    if (this.#head === this.#tail) {
      this.#head = null;
      this.#tail = null;
      this.#size = 0;
      return;
    }

    let current = this.#head;
    while (current.next !== this.#tail) {
      current = current.next;
    }

    current.next = null;
    this.#tail = current;
    this.#size -= 1;
  }

  toString() {
    let current = this.#head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}
