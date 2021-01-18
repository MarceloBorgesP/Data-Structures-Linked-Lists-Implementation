class Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value, null, this.tail);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head.previous = newNode;
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
      const newNode = new Node(value, nextNode, previous);
      nextNode.head.previous = newNode;
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

    if (nextNode) {
      nextNode.previous = previousNode;
    }

    if (index === this.length - 1) {
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

  reverse() {
    const reversedList = new LinkedList(this.tail.value);
    let nextNode = this.tail.previous;
    while (nextNode) {
      reversedList.append(nextNode.value);
      nextNode = nextNode.previous
    }
  
    return reversedList;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(18);
myLinkedList.prepend(1)
console.log(myLinkedList.printList());
//console.log(myLinkedList);
//console.log(myLinkedList.remove(3));
console.log(myLinkedList.reverse().printList());
myLinkedList.append(300);
console.log(myLinkedList.printList());



