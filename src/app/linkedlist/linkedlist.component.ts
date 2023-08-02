import { Component, OnInit } from '@angular/core';

class Node {
  value: Node | undefined;
  next: Node | undefined;
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: Node;
  tail: Node;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  cyclePush() { 
    this.tail.next = this.head.next.next.next;
  }

  pop() {
    if (!this.head) return;
    let current = this.head;
    let newtail = current;
    while (current.next) {
      newtail = current;
      current = current.next;
    }
    newtail.next = null;
    this.tail = newtail;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  shift() {
    if (!this.head) return;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) return;
    let counter = 0;
    let current = this.head;
    while (counter != index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(value, index) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      console.log(this);
      return true;
    }
    console.log(this);
    return false;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) {
      this.unshift(value);
      console.log('The new LL is ' + this);
      return true;
    }
    if (index == this.length) {
      this.push(value);
      console.log('The new LL is ' + this);
      return true;
    }
    let node = new Node(value);
    let prev = this.get(index - 1);
    node.next = prev.next;
    prev.next = node;
    this.length++;
    console.log('The new LL is ' + this);
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return;
    if (index == 0) {
      this.shift();
      console.log('the update LL ' + this);
      return true;
    }
    if (index == this.length) {
      this.pop();
      console.log('the update LL ' + this);
      return true;
    }
    let prevNode = this.get(index - 1);
    prevNode.next = prevNode.next.next;
    this.length--;
    console.log('the update LL ' + this);
  }
  
  reverseLinkedlist() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for(let i=0; i< this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    console.log(this)
  }
  middleofll() {
    if(this.head === null){
      console.log("the list is empty");
    }
    let fastPointer = this.head;
    let slowpointer = fastPointer;
    while(fastPointer.next !== null && fastPointer.next.next !== null) {
      fastPointer = fastPointer.next.next;
      slowpointer = slowpointer.next;
    }
    return slowpointer;  
  }
  detectloop() {
    if(this.head === null)
    console.log("empty list");
    let fastPointer = this.head;
    let slowPointer = this.head;
    let isLoop = false;
    let start = this.head;
    while(fastPointer.next != null && fastPointer.next.next !== null) {
      
      fastPointer = fastPointer.next.next;
      slowPointer = slowPointer.next;
      if(slowPointer === fastPointer) {
        isLoop = true;
        break;
      }
    }
    if(isLoop) {
      while (start !== slowPointer) {
        start = start.next;
        slowPointer = slowPointer.next;
      }
      if(start === slowPointer) {
        let junction = start;
        while(true) {
          console.log("loop " + start.value);
          start = start.next;
          if(start === junction) break;
        }
        console.log("loop detected")
      }
     
    }
    else console.log("No loop")   
  }
}

@Component({
  selector: 'app-linkedlist',
  templateUrl: './linkedlist.component.html',
  styleUrls: ['./linkedlist.component.css'],
})
export class LinkedlistComponent {
  list = new SinglyLinkedList();

  // list created for cycle of ll
  cycleLinkedList = new SinglyLinkedList();
  generateCycle() {
    this.cycleLinkedList.push(1);
    this.cycleLinkedList.push(2);
    this.cycleLinkedList.push(3);
    this.cycleLinkedList.push(4);
    this.cycleLinkedList.push(5);
    this.cycleLinkedList.push(6);
    this.cycleLinkedList.cyclePush();
    this.cycleLinkedList.detectloop();
  }

  linkedlistpush(value) {
    this.list.push(value);
  }
  linkedlistpop() {
    this.list.pop();
  }
  linkedlistshift() {
    this.list.shift();
  }
  linkedlistunshift(value) {
    this.list.unshift(value);
  }
  linkedlistget(index) {
    let node = this.list.get(index);
    console.log('The node is ' + node);
  }
  linkedlistset(value, index) {
    let update = this.list.set(value, index);
    console.log('the value is updated: ' + update);
  }
  linkedListInsert(value, index) {
    this.list.insert(value, index);
  }
  linkedListRemove(index) {
    this.list.remove(index);
  }
  reverseLinkedList() {
   this.list.reverseLinkedlist()
  }
  middleLinkedList() {
    this.list.middleofll();
  }
  detectcyclePrint() {
    this.generateCycle();
  }
}
