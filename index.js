class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value, this.head)
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    } else if (index <= 0) {
      this.prepend(value);
    } else {
      const previousNode = this.getNodeByIndex(index - 1);
      const nextNode = previousNode.next;
      const newNode = new Node(value, nextNode);
      previousNode.next = newNode;

      if (index >= this.length) {
        this.tail = newNode;
      }
    }

    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw "Can't delete a non-existing index";
    }

    const previousNode = this.getNodeByIndex(index - 1);
    const nodeToRemove = previousNode.next;
    const nextNode = nodeToRemove.next;
    previousNode.next = nextNode;

    if (index >= this.length) {
      this.tail = previousNode;
    }

    this.length--;
    return this.printList();
  }

  getNodeByIndex(index) {
    let head = this.head;

    for (let currentIndex = 0; index > currentIndex; currentIndex++) {
      head = head.next;
    }

    return head;
  }

  printList() {
    const list = [];
    let head = this.head;

    while(head) {
      list.push(head.value);
      head = head.next;
    }

    return list;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1)
console.log(myLinkedList.remove(3));
console.log(myLinkedList.printList());



