import { Component, OnInit } from '@angular/core';

class Node {
  value: any;
  left: Node;
  right: Node;
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: Node;
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.root == null) {
      this.root = node;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value == current.value) return undefined;
        if (value < current.value) {
          if (current.left == null) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right == null) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (this.root == null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  bfs() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node)
    while(queue.length){
      node = queue.shift()
      data.push(node.value)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return data
  }
}

@Component({
  selector: 'app-binary-tree',
  templateUrl: './binary-tree.component.html',
  styleUrls: ['./binary-tree.component.css'],
})
export class BinaryTreeComponent {
  tree = new BinarySearchTree();
  insert(value) {
    this.tree.insert(value);
    console.log('The tree is ' + this.tree);
  }
  find(value) {
    let contains = this.tree.find(value);
    console.log('Does the value exist: ' + contains);
  }
  breadthFirstSearch() {
    let arr = this.tree.bfs();
    console.log('The BFS traversal is ' + arr)
  }
}
