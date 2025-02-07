import Node from "./nodes";

class LinkedList {
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
}
