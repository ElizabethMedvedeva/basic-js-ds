const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    if (!this.rootNode) {
      return null; 
    } else {
      return this.rootNode;
    }
  }

  add(data) {
    this.rootNode = addNewNode(this.rootNode, data);
    function addNewNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (data === node.data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNewNode(node.left, data);
      } else {
        node.right = addNewNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasNode(this.rootNode, data);
     function hasNode(node, data) {
      if(!node) {
        return false;
      }
      if(node.data === data) {
        return true;
      }
      if (node.data > data) {
        return hasNode(node.left, data);
      }
      if (node.data < data) {
        return hasNode(node.right, data);
      }
     }
  }

  find(data) {
    return findNode(this.rootNode, data);
    function findNode(node, data) {
      if(!node) {
        return  null;
      } 
      if(node.data === data) {
        return node;
      }
      if (node.data > data) {
        return findNode(node.left, data);
      }
      if (node.data < data) {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      } else if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (node.data === data) {
        if (!node.left && !node.right) {
          return null;
        }
      }
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }
      let minRightNode = node.right;
      while (minRightNode.left) {
        minRightNode = minRightNode.left;
      }
      node.data = minRightNode.data;
      node.right = removeNode(node.right, minRightNode.data);
      return node;
    }
  }

  min() {
    if(!this.rootNode) {
      return null;
    }
    let minNode = this.rootNode;
    while(minNode.left) {
      minNode = minNode.left
    }
    return minNode.data;
  }

  max() {
    if(!this.rootNode) {
      return null;
    }
    let maxNode = this.rootNode;
    while(maxNode.right) {
      maxNode = maxNode.right
    }
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};